import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Position } from 'src/app/models/position';
import { PositionsService } from 'src/app/services/positions.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  position!: Position
  subscription!: Subscription
  form!: FormGroup

  constructor(
    private shareMsgService: ShareDataService,
    private positionsService: PositionsService,
    public fb: FormBuilder) {
    this.form = this.fb.group({
      id: [],
      name: [''],
      technology: [''],
      job: [null]
    })
   }

  ngOnInit(): void {
    this.subscription = this.shareMsgService.getMessage().subscribe(msg => {
      if (this.tryParseJSONObject(msg)) {
        this.position = JSON.parse(msg)
        this.form.patchValue({
          id: this.position.id,
          name: this.position.name,
          technology: this.position.technology,
          job: this.position.pdf
        })
      }
    })
  }

  submitForm() {
    this.positionsService.postPositions(this.form.value)
  }

  // Third Party method for check JSON object string
  tryParseJSONObject (jsonString: string){
    try {
      var o = JSON.parse(jsonString);
      if (o && typeof o === "object") {
        return o;
      }
    }
    catch (e) { }

    return false;
};



}
