import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(private http: HttpClient) { }

  getPositions() {
    return this.http.get('../../assets/data/positions.json')
  }
}
