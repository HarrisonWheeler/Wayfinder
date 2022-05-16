import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js";


class TripsService {
  createTrip(newTrip) {
    ProxyState.trips = [new Trip(newTrip), ...ProxyState.trips]
  }
  setActiveTrip(tripId) {
    let found = ProxyState.trips.find(t => t.id == tripId)
    ProxyState.activeTrip = found
    console.log('active trip', ProxyState.activeTrip);
  }

}

export const tripsService = new TripsService()