import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-position-card',
  templateUrl: './position-card.component.html',
  styleUrls: ['./position-card.component.scss']
})
export class PositionCardComponent implements OnInit {
  faPencilAlt = faPencilAlt

  constructor() { }

  ngOnInit(): void {
  }

}
