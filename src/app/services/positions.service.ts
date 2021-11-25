import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Position } from '../models/position';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/data'

@Injectable({
  providedIn: 'root'
})

export class PositionsService {

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(apiUrl)
  }

  editPosition(position: Position): Observable<Position> {
    const positionForm: Position = {
      id: position.id,
      name: position.name,
      technology: position.technology,
      candidates: position.candidates,
      pdf: position.pdf,
      category: position.category
    }
    return this.http.put<Position>(apiUrl + '/' + position.id, positionForm)
  }
}











    // let position: Position
    // let editedPosition: Position

    // this.getPositions().subscribe((data: any) =>{
    //   this.positions = data['data']
    //   position = this.positions.find(el => el.id === formPosition.id)

    //   editedPosition = {
    //     id: position.id,
    //     name: formPosition.name,
    //     technology: formPosition.technology,
    //     category: position.category,
    //     candidates: position.candidates,
    //     pdf: formPosition.pdf.name
    //   }
    //   console.log(editedPosition)
    //   return editedPosition
    // })
    // TODO: Add here URL to post new Position like: this.http.post('fakeUrl', { position } )
