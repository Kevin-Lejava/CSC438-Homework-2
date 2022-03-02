import { Injectable } from '@angular/core';
import { Place } from './place.model'
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      id: 'p1',
      title: 'Manhattan Mansion',
      description: 'In the heart of New York City.',
      imageUrl: '',
      price: 149.99
    ),
  ]

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
