import { generateId } from "../Utils/generateId.js";

export class Trip {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
  }
}