import { generateId } from "../Utils/generateId";

export class Trip {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
  }
}