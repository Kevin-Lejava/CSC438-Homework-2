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
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1541016891/181031-carrier-payne-tease_tk805s",
      149.99
    ),

    new Place(
      "p2",
      "PlaceHolder",
      "PlaceHolder",
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1541016891/181031-carrier-payne-tease_tk805s",
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
