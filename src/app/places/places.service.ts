import { Injectable } from '@angular/core';
import { Place } from './place.model'
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York City.",
      "placeholder",
      149.99
    ),

    new Place(
      "p2",
      "PlaceHolder",
      "PlaceHolder",
      "placeholder",
      999.99
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
