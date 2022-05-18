import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"

class ReservationsService {
  createReservation(newReservation) {
    ProxyState.reservations = [new Reservation(newReservation), ...ProxyState.reservations]
    console.log('proxy state reser', ProxyState.reservations);
  }

  deleteReservation(reservationId) {
    ProxyState.reservations = ProxyState.reservations.filter(r => r.id !== reservationId)
  }

}

export const reservationsService = new ReservationsService()