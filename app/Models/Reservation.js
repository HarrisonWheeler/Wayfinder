import { generateId } from "../Utils/generateId.js"

export class Reservation {
  constructor(data) {
    this.id = data.id || generateId()
    this.tripId = data.tripId
    this.type = data.type
    this.name = data.name
    this.confirmationNumber = data.confirmationNumber
    this.address = data.address
    this.date = data.date
    this.notes = data.notes
    this.cost = data.cost || 0
  }

  // TODO this template is way too big - need to refactor
  get Template() {
    return /*html*/ `
      <div class="container-fluid rounded bg-light reservations-height-overflow">
        <div class="row p-2">
          <div class="col-1">
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
        <div class="row bg-secondary rounded shadow p-2 mb-2 align-items-center" id="reservations">
          <div class="col-1">
            <i class="mdi ${this.getIcon()} mdi-24px"></i>
          </div>
          <div class="col-3">
            <p>${this.name}</p>
          </div>
          <div class="col-3">
            <p>${this.confirmationNumber}</p>
          </div>
          <div class="col-3">
            <p>${this.address}</p>
          </div>
          <div class="col-1">
            <p>${this.date}</p>
          </div>
          <div class="col-1">
            <p>${this.cost}</p>
          </div>
        </div>
       </div>
      <hr>
      <form onsubmit="app.reservationsController.createReservation('${this.tripId}')">
       <div class="container-fluid mt-2">
        <div class="row align-items-center">
            <div class="col-1">
              <div class="form-group">
                <select class="form-control bg-light" name="type">
                  <option selected disabled>Type</option>
                  <option value="hotel">Hotel</option>
                  <option value="flight">Flight</option>
                  <option value="car">Car</option>
                  <option value="entertainment">Entertainment</option>
                </select>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <input type="text" name="name" class="form-control bg-light" minlength="1" max-length="50" placeholder="Name..." required>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <input type="text" name="confirmationNumber" class="form-control bg-light" minlength="1" max-length="50" placeholder="Confirmation..." required>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <input type="text" name="address" class="form-control bg-light" minlength="1" max-length="50" placeholder="Address..." required>
              </div>
            </div>
            <div class="col-1">
              <div class="form-group">
                <input type="date" name="date" class="form-control bg-light" required>
              </div>
            </div>
            <div class="col-1">
              <div class="form-group">
                <input type="number" name="cost" class="form-control bg-light" placeholder="0.00" min="1" max="10000" required>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-end mt-3">
              <button class="btn border bg-light p-0 px-4">Add</button>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <textarea name="notes" id="notes" class="form-control" placeholder="Notes Here..." minlength="1" maxlength="250" required></textarea>
              </div>
            </div>
           </div>
          </div>
         </div>
        </form>
    `
  }

  getIcon() {
    if (this.type == "hotel") {
      return 'mdi-office-building'
    }
    if (this.type == "flight") {
      return 'mdi-airplane'
    }
    if (this.type == "car") {
      return 'mdi-car'
    }
    if (this.type == "entertainment") {
      // TODO what does mdi call a ferris wheel
      return 'mdi-tire'
    }
  }
}