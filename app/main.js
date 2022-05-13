import { ReservationsController } from "./Controllers/ReservationsController.js";
import { TripsController } from "./Controllers/TripsController.js";

class App {

  tripsController = new TripsController()
  reservationsController = new ReservationsController()
}

window["app"] = new App();
