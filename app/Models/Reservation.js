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