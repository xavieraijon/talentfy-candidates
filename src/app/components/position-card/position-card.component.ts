import { Component, Input, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Position } from 'src/app/models/position';
import { ShareDataService } from 'src/app/services/share-data.service';


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

  constructor(private shareMsgService: ShareDataService) { }

  ngOnInit(): void {
    this.positions = this.position.value
    this.subscription = this.shareMsgService.getMessage().subscribe(msg => {
      this.positions = this.sortBy(msg)
    })
  }

  sortBy(prop: string) {
    return this.position.value.sort((a: any, b: any) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  showCategoryTitle(prop: any) {
    return prop.key === '1' ? 'Nueva' : (prop.key === '2' ? 'Activa' : 'No Activa')
  }

  sendToModal(position: Position) {
    this.shareMsgService.updateMessage(JSON.stringify(position))
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
