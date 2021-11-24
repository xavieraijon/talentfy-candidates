import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models/position';
import { PositionsService } from 'src/app/services/positions.service';

@Component({
  selector: 'app-positions-page',
  templateUrl: './positions-page.component.html',
  styleUrls: ['./positions-page.component.scss']
})
export class PositionsPageComponent implements OnInit {
  positions: any[] = []

  constructor(private positionsService: PositionsService ) { }

  ngOnInit(): void {
    this.positionsService.getPositions().subscribe((data: any) =>{
      this.positions = this.groupByType(data['data'])
    })

  }

  groupByType(array: any) {
    return array.reduce((r: any, pos: any) => {
      r[pos.category] = r[pos.category] || [];
      r[pos.category].push(pos);
      return r;
    }, Object.create(null));
  }

}
