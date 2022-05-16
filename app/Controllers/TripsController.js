import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";


function _drawTrips() {
  // TODO need to fix these - all are selected
  let buttonTemplate = ''
  ProxyState.trips.forEach(t => buttonTemplate += t.Button)
  document.getElementById('nav-tab').innerHTML = buttonTemplate

  let contentTemplate = ''
  ProxyState.trips.forEach(t => contentTemplate += t.Content)
  document.getElementById('nav-tabContent').innerHTML = contentTemplate
}

// NOTE this probably wont be needed with the current tab implementation
// function _drawActiveTrip() {
//   throw new Error("Function not implemented.");
// }

export class TripsController {
  constructor() {
    console.log('hello from the trips controller');
    // ProxyState.on('activeTrip', _drawActiveTrip)
    _drawTrips()
  }

  createTrip() {
    window.event.preventDefault()
    let form = window.event.target
    console.log('form', form);
  }

  setActiveTrip(tripId) {
    // TODO come back and fix text styling
    tripsService.setActiveTrip(tripId)
    // document.getElementById(`nav-${tripId}`).classList.add('text-dark', 'bg-light')
  }
}


