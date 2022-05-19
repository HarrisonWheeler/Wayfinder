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
    this.cost = data.cost || 0
  }

  get Template() {
    return /*html*/ `
        <div class="row bg-secondary rounded shadow p-2 mb-2 align-items-center mt-3 mt-md-0 position-relative" id="reservations">
          <div class="col-1 col-md-1 p-0 p-md-2">
            <i class="mdi ${this.getIcon()} mdi-24px"></i>
          </div>
          <div class="col-8 col-md-3">
            <p>${this.name}</p>
          </div>
          <div class="col-3 col-md-3 text-end text-md-start">
            <p>${this.confirmationNumber}</p>
          </div>
          <div class="col-8 col-md-3 p-0 p-md-2 my-2 my-md-0">
            <p>${this.address}</p>
          </div>
          <div class="col-4 col-md-1 text-end text-md-start">
            <p>${this.date}</p>
          </div>
          <div class="col-6 d-md-none p-0">
            <i class="mdi mdi-file-document-outline mdi-24px"></i>
          </div>
          <div class="col-6 col-md-1 text-center">
            <p class="text-end text-md-start">$${this.cost}</p>
            <i class="mdi mdi-delete position-absolute delete-reservation selectable" onclick="app.reservationsController.deleteReservation('${this.id}')" title="Delete Reservation"></i>
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
      return 'mdi-ferris-wheel'
    }
  }
}