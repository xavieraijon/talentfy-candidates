import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShareDataService {
  sharedMessage = new BehaviorSubject<string>('id')

  constructor() { }

  getMessage(): Observable<string> {
    return this.sharedMessage.asObservable()
  }

  updateMessage(message: string) {
    this.sharedMessage.next(message)
  }
}
