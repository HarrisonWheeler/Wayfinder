import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Trip {
  constructor(data) {
    // TODO hardcoding id for testing 
    // this.id = data.id || generateId()
    this.id = 1
    this.title = data.title
  }

  get Button() {
    return /*html*/ `
    <button class="nav-link active bg-light border-bottom-0" id="nav-${this.id}" data-bs-toggle="tab" data-bs-target="#nav-${this.id}-tab"
    type="button" role="tab" aria-controls="nav-${this.id}" aria-selected="true" onclick="app.tripsController.setActiveTrip('${this.id}')">${this.title}</button>
    `
  }

  get Content() {
    return /*html*/ `
    <div class="tab-pane fade show active" id="nav-${this.id}-tab" role="tabpanel" aria-labelledby="nav-${this.id}-tab">
      <div>
        ${this.Reservations}
      </div>
    </div>
    `
  }

  get Reservations() {
    // TODO have not tested this
    let template = ''
    let reservations = ProxyState.reservations.filter(r => r.tripId === this.id)
    reservations.forEach(r => template += r.Template)
    return template
  }
}