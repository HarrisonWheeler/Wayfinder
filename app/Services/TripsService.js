import { ProxyState } from "../AppState.js"


class TripsService {
  setActiveTrip(tripId) {
    let found = ProxyState.trips.find(t => t.id == tripId)
    ProxyState.activeTrip = found
    console.log('active trip', ProxyState.activeTrip);
  }

}

export const tripsService = new TripsService()