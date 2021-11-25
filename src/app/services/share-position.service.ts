import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})

export class SharePositionService {
  sharedPosition = new Subject<Position>()

  constructor() { }

  getPosition(): Observable<Position> {
    return this.sharedPosition.asObservable()
  }

  updatePosition(position: Position) {
    this.sharedPosition.next(position)
  }
}
