import { ReservationsController } from "./Controllers/ReservationsController.js";
import { TripsController } from "./Controllers/TripsController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {

  reservationsController = new ReservationsController()
  tripsController = new TripsController()
}

loadState()
window["app"] = new App();
