import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Trip {
  constructor(data) {
    // this.id = data.id || generateId()
    this.id = 1
    this.title = data.title
  }

  get Button() {
    // TODO change active button bg color to bg-light
    return /*html*/ `
    <button class="nav-link border-bottom-0 border-light me-1" id="nav-${this.id}" data-bs-toggle="tab" data-bs-target="#nav-${this.id}-tab"
    type="button" role="tab" aria-controls="nav-${this.id}" aria-selected="true">${this.title}</button>
    `
  }

  get Content() {
    return /*html*/ `
    <div class="tab-pane fade show" id="nav-${this.id}-tab" role="tabpanel" aria-labelledby="nav-${this.id}-tab">
      <div>
        ${this.Reservations}
      </div>
    </div>
    `
  }

  get Reservations() {
    let template = ''
    let reservations = ProxyState.reservations.filter(r => r.tripId === this.id)
    reservations.forEach(r => template += r.Template)
    return template
  }
}