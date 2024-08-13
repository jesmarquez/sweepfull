import { Place } from "./model/place-model";

export class DataService {
  public places: Place[] = [
    {
      name: "WASHROOM 1",
      code: "UI-100",
      location: "floor 1",
      status: "clean",
    },
    {
      name: "BREAKROOM 3",
      code: "JK-654",
      location: "floor 1",
      status: "no-clean"
    }
  ]

  addPlace(name: string, code: string, location: string, status: string) {
    this.places.push({ name: name, code: code, location: location, status: status });
  }
}