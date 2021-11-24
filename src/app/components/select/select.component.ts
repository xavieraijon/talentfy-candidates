import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(private shareMsgService: ShareDataService) { }

  ngOnInit(): void {
  }

  getSelectData(event: any) {
    this.sendToShareMsg(event.target.value)
  }

  sendToShareMsg(msg: string) {
    this.shareMsgService.updateMessage(msg)
  }

}
