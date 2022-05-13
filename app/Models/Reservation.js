import { generateId } from "../Utils/generateId"


export class Reservation {
  constructor(data) {
    this.id = data.id || generateId()
    this.tripId = data.tripId
    this.type = data.type
    this.name = data.name
    this.address = data.address
    this.date = data.date
    this.cost = data.cost || 0
  }
}