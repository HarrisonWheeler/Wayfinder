import { ReservationsController } from "./Controllers/ReservationsController.js";
import { TripsController } from "./Controllers/TripsController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {

  tripsController = new TripsController()
  reservationsController = new ReservationsController()
}

loadState()
window["app"] = new App();
