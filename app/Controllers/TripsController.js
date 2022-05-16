import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawTrips() {
  // TODO need to fix these - all are selected
  let buttonTemplate = ''
  ProxyState.trips.forEach(t => buttonTemplate += t.Button)
  document.getElementById('nav-tab').innerHTML = buttonTemplate

  let contentTemplate = ''
  ProxyState.trips.forEach(t => contentTemplate += t.Content)
  document.getElementById('nav-tabContent').innerHTML = contentTemplate
}

export class TripsController {
  constructor() {
    console.log('hello from the trips controller');
    ProxyState.on('trips', _drawTrips)
    _drawTrips()
  }

  createTrip() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      console.log('form', form);
      const newTrip = {
        // @ts-ignore
        title: form.title.value
      }
      tripsService.createTrip(newTrip)
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('create-trip-modal')).hide()
      Pop.toast('Trip Created!', 'success')
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }

  }

  // Probably dont need this
  setActiveTrip(tripId) {
    // TODO come back and fix text styling
    // tripsService.setActiveTrip(tripId)
    // document.getElementById(`nav-${tripId}`).classList.add('text-dark', 'bg-light')
  }
}


