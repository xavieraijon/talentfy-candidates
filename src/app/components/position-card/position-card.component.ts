import { Component, Input, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Position } from 'src/app/models/position';
import { ShareDataService } from 'src/app/services/share-data.service';
import { SharePositionService } from 'src/app/services/share-position.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-position-card',
  templateUrl: './position-card.component.html',
  styleUrls: ['./position-card.component.scss']
})
export class PositionCardComponent implements OnInit {
  @Input() position: any
  positions: any[] = []
  subscription!: Subscription
  faPencilAlt = faPencilAlt
  faFilePdf = faFilePdf

  constructor(
    private shareMsgService: ShareDataService,
    private sharePosition: SharePositionService
    ) { }

  ngOnInit(): void {
    this.positions = this.position.value
    this.subscription = this.shareMsgService.getMessage().subscribe(msg => {
      this.positions = _.sortBy(this.positions, [o => {
        return o[msg]
      }])
    })
  }

  showCategoryTitle(prop: any) {
    return prop.key === '1' ? 'Nueva' : (prop.key === '2' ? 'Activa' : 'No Activa')
  }

  sendToModal(position: Position) {
    this.sharePosition.updatePosition(position)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
