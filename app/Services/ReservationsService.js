import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"

class ReservationsService {

  // This runs when a trip is deleted - to prevent orphaned data
  deleteReservationsByTripId(tripId) {
    ProxyState.reservations = ProxyState.reservations.filter(r => r.tripId !== tripId)
  }
  createReservation(newReservation) {
    ProxyState.reservations = [...ProxyState.reservations, new Reservation(newReservation),]
  }

  deleteReservation(reservationId) {
    ProxyState.reservations = ProxyState.reservations.filter(r => r.id !== reservationId)
  }

}

export const reservationsService = new ReservationsService()