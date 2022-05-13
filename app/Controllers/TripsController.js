import { ProxyState } from "../AppState.js";


function _drawTrips() {
  let buttonTemplate = ''
  ProxyState.trips.forEach(t => buttonTemplate += /*html*/
    `<button class="nav-link active" id="nav-home-tab-${t.id}" data-bs-toggle="tab" data-bs-target="#nav-home-${t.id}"
  type="button" role="tab" aria-controls="nav-home" aria-selected="true">${t.title}</button>`)
  document.getElementById('nav-tab').innerHTML = buttonTemplate
}

export class TripsController {
  constructor() {
    console.log('hello from the trips controller');
    _drawTrips()
  }
}