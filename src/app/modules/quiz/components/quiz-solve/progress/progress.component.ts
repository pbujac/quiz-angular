import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'qz-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.scss']
})
export class ProgressComponent {

  @Output() onReviewState = new EventEmitter<boolean>();

  constructor() {
  }

  public onReview() {
    this.onReviewState.emit(true);
  }
}
