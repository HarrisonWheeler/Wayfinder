import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js";
import { reservationsService } from "./ReservationsService.js";


class TripsService {
  addNote(note) {
    ProxyState.activeTrip.notes = note
    ProxyState.activeTrip = ProxyState.activeTrip
  }

  createTrip(newTrip) {
    const trip = new Trip(newTrip)
    ProxyState.trips = [...ProxyState.trips, trip]
    ProxyState.activeTrip = trip
  }

  setActiveTrip(tripId) {
    let found = ProxyState.trips.find(t => t.id == tripId)
    ProxyState.activeTrip = found
  }

  deleteTrip(tripId) {
    ProxyState.trips = ProxyState.trips.filter(t => t.id !== tripId)
    ProxyState.activeTrip = null
    reservationsService.deleteReservationsByTripId(tripId)
  }

}

export const tripsService = new TripsService()