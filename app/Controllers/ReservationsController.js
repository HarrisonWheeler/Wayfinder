import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";
import { saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";


export class ReservationsController {
  constructor() {
    ProxyState.on('reservations', saveState)
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
        cost: form.cost.valueAsNumber
      }
      reservationsService.createReservation(newReservation)
      Pop.toast('Reservation Created!', 'success')
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  async deleteReservation(reservationId) {
    try {
      if (await Pop.confirm()) {
        reservationsService.deleteReservation(reservationId)
        Pop.toast('Reservation Deleted!', 'success')
      }
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}