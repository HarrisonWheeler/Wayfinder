import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Trip {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.notes = data.notes || ""
  }

  // HTML GETTERS

  // Tabs - have to draw these to the screen at the same time we draw the TabContent
  get Tabs() {
    return /*html*/ `
    <button class="nav-link border-bottom-0 border-light me-1" id="nav-${this.id}" data-bs-toggle="tab" data-bs-target="#nav-${this.id}-tab"
    type="button" role="tab" aria-controls="nav-${this.id}" aria-selected="true" onclick="app.tripsController.setActiveTrip('${this.id}')">${this.title}</button>
    `
  }

  get TabContent() {
    return /*html*/ `
    <div class="tab-pane fade show mobile-height" id="nav-${this.id}-tab" role="tabpanel" aria-labelledby="nav-${this.id}-tab">
    </div>
    `
  }

  get TripReservations() {
    return /*html*/ `
    <div class="container-fluid bg-light reservations-height-overflow top-right-rounded top-left-square">
        <div class="row p-2 mt-2 d-none d-md-flex">
          <div class="col-1 ">
            <h6>Type</h6>
          </div>
          <div class="col-3">
            <h6>Name</h6>
          </div>
          <div class="col-3">
            <h6>Confirmation Number</h6>
          </div>
          <div class="col-3">
            <h6>Address</h6>
          </div>
          <div class="col-1">
            <h6>Date</h6>
          </div>
          <div class="col-1">
            <h6>Cost</h6>
          </div>
        </div>
        ${this.Reservations}
      </div>
    <hr class="my-3">
    <div class="container-fluid bg-light mobile-height">
      ${this.ReservationForm}
      <div class="row">
        <div class="col-12 col-md-6">
         <form>
          <div class="form-group mt-2">
            <textarea name="notes" id="notes" class="form-control" placeholder="Trip Notes Here..."
            minlength="1" maxlength="250" required onblur="app.tripsController.addNote()" >${this.notes}</textarea>
          </div>
         </form>
       </div>
      </div>
      <div class="row justify-content-between mt-2">
        <div class="col-3 d-flex align-items-center">
          <i class="mdi mdi-delete mdi-24px selectable" title="Delete Trip" onclick="app.tripsController.deleteTrip('${this.id}')"></i>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-end">
          <h4 class="p-2 me-2">Total: $${this.TotalCost}</h4>
        </div>
      </div>
     </div>
    </div>
    `
  }

  get ReservationForm() {
    return /*html*/ `
    <form onsubmit="app.reservationsController.createReservation('${this.id}')">
     <div class="row align-items-center mt-2">
         <div class="col-2 col-md-1">
           <div class="form-group">
             <select class="form-control selectable" required name="type">
               <option selected disabled value="">Type</option>
               <option value="hotel">Hotel</option>
               <option value="flight">Flight</option>
               <option value="car">Car</option>
               <option value="entertainment">Entertainment</option>
             </select>
           </div>
         </div>
         <div class="col-5 col-md-3">
           <div class="form-group">
             <input type="text" name="name" class="form-control" minlength="1" maxlength="50" placeholder="Name..." required>
           </div>
         </div>
         <div class="col-5 col-md-3">
           <div class="form-group">
             <input type="text" name="confirmationNumber" class="form-control" minlength="1" maxlength="50" placeholder="Confirmation..." required>
           </div>
         </div>
         <div class="col-9 col-md-3 mt-2 mt-md-0">
           <div class="form-group">
             <input type="text" name="address" class="form-control" minlength="1" maxlength="50" placeholder="Address..." required>
           </div>
         </div>
         <div class="col-3 col-md-1 mt-2 mt-md-0">
           <div class="form-group">
             <input type="date" name="date" class="form-control" required>
           </div>
         </div>
         <div class="col-3 col-md-1 mt-2 mt-md-0">
           <div class="form-group">
             <input type="number" name="cost" class="form-control" placeholder="$0.00" min="1" max="10000" required>
           </div>
         </div>
         <div class="col-4 offset-5 offset-md-0 col-md-12 d-flex justify-content-end mt-3">
           <button class="btn border-dark p-0 px-4 elevation-2">Add</button>
         </div>
       </div>
     </form>
    `
  }

  // LOGIC GETTERS

  // Iterates over reservations specific to this trip, and totals the cost
  get TotalCost() {
    let total = 0
    let reservations = this.filterAndSortReservations()
    reservations.forEach(r => total += r.cost)
    return total
  }

  // Filters reservations by tripId
  get Reservations() {
    let template = ''
    let reservations = this.filterAndSortReservations()
    reservations.forEach(r => template += r.Template)
    return template
  }

  // Filters reservations by tripId
  filterAndSortReservations() {
    let filteredReservations = ProxyState.reservations.filter(r => r.tripId === this.id)
    // Sorting filtered array by date - newest date first
    filteredReservations.sort((a, b) => {
      return a.date > b.date ? 1 : a.date < b.date ? -1 : 0
    })
    return filteredReservations
  }
}