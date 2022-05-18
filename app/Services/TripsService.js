import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js";


class TripsService {
  createTrip(newTrip) {
    const trip = new Trip(newTrip)
    ProxyState.trips = [...ProxyState.trips, trip]
    ProxyState.activeTrip = trip
  }

  setActiveTrip(tripId) {
    let found = ProxyState.trips.find(t => t.id == tripId)
    ProxyState.activeTrip = found
    console.log('active trip', ProxyState.activeTrip);
  }

  deleteTrip(tripId) {
    ProxyState.trips = ProxyState.trips.filter(t => t.id !== tripId)
    // TODO delete orphan data
  }

}

export const tripsService = new TripsService()