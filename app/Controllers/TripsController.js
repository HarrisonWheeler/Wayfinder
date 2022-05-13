import { ProxyState } from "../AppState.js";


function _drawTrips() {
  // TODO need to fix these - all are selected
  let buttonTemplate = ''
  ProxyState.trips.forEach(t => buttonTemplate += /*html*/
    `<button class="nav-link active" id="nav-${t.id}-tab" data-bs-toggle="tab" data-bs-target="#nav-home-${t.id}"
  type="button" role="tab" aria-controls="nav-${t.title}" aria-selected="true">${t.title}</button>`)
  document.getElementById('nav-tab').innerHTML = buttonTemplate
}

export class TripsController {
  constructor() {
    console.log('hello from the trips controller');
    _drawTrips()
  }
}