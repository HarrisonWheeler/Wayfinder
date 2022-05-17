import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawReservations() {

}

export class ReservationsController {
  constructor() {
    ProxyState.on('reservations', _drawReservations)
  }

  createReservation(tripId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      const newReservation = {
        tripId: tripId,
        // @ts-ignore
        type: form.type.value,
        // @ts-ignore
        name: form.name.value,
        // @ts-ignore
        confirmationNumber: form.confirmationNumber.value,
        // @ts-ignore
        address: form.address.value,
        // @ts-ignore
        date: form.date.value,
        // @ts-ignore
        notes: form.notes.value,
        // @ts-ignore
        cost: form.cost.value
      }
      reservationsService.createReservation(newReservation)
      Pop.toast('Reservation Created!', 'success')
      console.log('new reservation', newReservation)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}