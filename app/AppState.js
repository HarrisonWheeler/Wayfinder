import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  trips = [new Trip({ title: "Spanish GP", id: 2 })]

  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [new Reservation({ tripId: 1, type: "flight", name: "Test", confirmationNumber: "1234", address: "1234 Boise ID", date: "12/25/23", notes: "test notes", cost: 100 }), new Reservation({ tripId: 2, type: "flight", name: "Test - Spanish GP", confirmationNumber: "1234", address: "1234 Boise ID", date: "12/25/23", notes: "test notes", cost: 100 })]

  activeTrip = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
