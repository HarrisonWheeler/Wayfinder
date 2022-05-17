import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawTabs() {
  // TODO need to fix these - all are selected
  let tabsTemplate = ''
  console.log('Trips in AppState', ProxyState.trips);
  ProxyState.trips.forEach(t => tabsTemplate += t.Tabs)
  document.getElementById('nav-tab').innerHTML = tabsTemplate

  let tabContentTemplate = ''
  ProxyState.trips.forEach(t => tabContentTemplate += t.TabContent)
  document.getElementById('nav-tabContent').innerHTML = tabContentTemplate
}

function _drawTrip() {
  document.getElementById(`nav-${ProxyState.activeTrip.id}-tab`).innerHTML = ProxyState.activeTrip.TripReservations
}


export class TripsController {
  constructor() {
    console.log('hello from the trips controller');
    ProxyState.on('trips', _drawTabs)
    ProxyState.on('activeTrip', _drawTrip)
    ProxyState.on('reservations', _drawTrip)
    _drawTabs()
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

  setActiveTrip(tripId) {
    tripsService.setActiveTrip(tripId)
    // document.getElementById(`nav-${tripId}`).classList.add('text-dark', 'bg-light')
  }
}


