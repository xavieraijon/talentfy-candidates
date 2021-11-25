import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Position } from 'src/app/models/position';
import { PositionsService } from 'src/app/services/positions.service';
import { SharePositionService } from 'src/app/services/share-position.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  position!: Position
  subscription!: Subscription
  form!: FormGroup
  faFilePdf = faFilePdf
  @ViewChild('pdf') pdf!: ElementRef

  constructor(
    private sharePosition: SharePositionService,
    private positionsService: PositionsService,
    public fb: FormBuilder
    ) {
    this.form = this.fb.group({
      id: [],
      name: [''],
      technology: [''],
      category: [],
      candidates: [],
      pdf: [null]
    })
   }

  ngOnInit(): void {
    this.subscription = this.sharePosition.getPosition().subscribe((position: Position) => {
      this.position = position
      this.form.patchValue({
        id: position.id,
        name: position.name,
        technology: position.technology,
        category: position.category,
        candidates: position.candidates
      })
    })
  }


  submitForm() {
    this.pdf.nativeElement.value = ''
    this.subscription = this.positionsService.editPosition(this.form.value).subscribe(position => {
      this.sharePosition.updatePosition(position)
    })
  }


  sendFile(event: any) {
    const file = (event.target as HTMLInputElement).files![0]
    this.form.patchValue({
      pdf: file.name
    })
    this.form.get('job')?.updateValueAndValidity()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
