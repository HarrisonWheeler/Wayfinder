import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";

function _drawTabs() {
  // This is drawing the bootstrap tab, AND the anchor for the tab content to be drawn into
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
    ProxyState.on('trips', _drawTabs)
    ProxyState.on('trips', saveState)
    ProxyState.on('activeTrip', _drawTrip)
    ProxyState.on('activeTrip', saveState)
    ProxyState.on('reservations', _drawTrip)
    _drawTabs()
    setTimeout(() => {
      // @ts-ignore
      document.querySelector('[role="tab"]')?.click()
    }, 100)
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
      document.querySelector('[role=tab]:last-child').click()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  setActiveTrip(tripId) {
    tripsService.setActiveTrip(tripId)
  }

  async deleteTrip(tripId) {
    try {
      if (await Pop.confirm()) {
        tripsService.deleteTrip(tripId)
        Pop.toast('Trip Deleted!', 'success')
      }
      console.log(tripId);
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  addNote() {
    try {
      window.event.preventDefault()
      // @ts-ignore
      let note = window.event.target.form.notes.value
      tripsService.addNote(note)
      Pop.toast('Notes Added', 'success')
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}


