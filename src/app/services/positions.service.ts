import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  positions: any[] = []


  constructor(private http: HttpClient) { }

  getPositions() {
    return this.http.get('../../assets/data/positions.json')
  }

  postPositions(formPosition: Position) {
    let position: Position
    let editedPosition: Position

    this.getPositions().subscribe((data: any) =>{
      this.positions = data['data']
      position = this.positions.find(el => el.id === formPosition.id)

      editedPosition = {
        id: position.id,
        name: formPosition.name,
        technology: formPosition.technology,
        category: position.category,
        candidates: position.candidates,
        pdf: formPosition.pdf
      }
      console.log(editedPosition)
      return editedPosition
      // TODO: Add here URL to post new Position like: this.http.post('fakeUrl', { position } )
    })
  }
}
