import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models/position';
import { PositionsService } from 'src/app/services/positions.service';
import { SharePositionService } from 'src/app/services/share-position.service';

@Component({
  selector: 'app-positions-page',
  templateUrl: './positions-page.component.html',
  styleUrls: ['./positions-page.component.scss']
})
export class PositionsPageComponent implements OnInit {
  positionList: Position[] = []


  constructor(
    private positionsService: PositionsService,
    private sharePosition: SharePositionService
    ) { }

  ngOnInit() {
    this.loadPositionList()
    this.handleSubscription()
  }

  loadPositionList(){
    this.positionsService.getPositions().subscribe((positions) => {
      this.positionList = this.groupByType(positions)
    })
  }

  handleSubscription() {
    this.sharePosition.getPosition().subscribe(() => {
      this.positionsService.getPositions().subscribe((positions) => {
        this.positionList = this.groupByType(positions)
      })
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
