import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";


export function saveState() {
  localStorage.setItem('WayFinder', JSON.stringify({
    trips: ProxyState.trips,
    reservations: ProxyState.reservations
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('WayFinder'))
  if (data != null) {
    ProxyState.trips = data.trips.map(t => new Trip(t))
    ProxyState.reservations = data.reservations.map(r => new Reservation(r))
    console.log('loaded state');
  }
}