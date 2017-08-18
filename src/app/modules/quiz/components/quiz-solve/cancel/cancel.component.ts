import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'qz-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent {

  @Output() onCancelState = new EventEmitter<boolean>();

  constructor() {
  }

  public onCancel() {
    this.onCancelState.emit(true);
  }

}
