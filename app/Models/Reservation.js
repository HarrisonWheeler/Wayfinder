import { generateId } from "../Utils/generateId"


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

  // TODO need to figure out how to best format this
  get Template() {
    return /*html*/ `
    <div class="tab-pane fade show active" id="nav-home-${this.tripId}" role="tabpanel" aria-labelledby="nav--${this.tripId}-tab">
      <div class="container-fluid rounded bg-light">
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
  </div>
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