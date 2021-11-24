import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  sharedMessage = new Subject<string>()

  constructor() { }

  getMessage(): Observable<string> {
    return this.sharedMessage.asObservable()
  }

  updateMessage(message: string) {
    this.sharedMessage.next(message)
  }
}
