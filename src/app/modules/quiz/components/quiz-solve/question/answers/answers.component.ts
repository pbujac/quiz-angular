import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'qz-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.scss']
})
export class AnswersComponent implements OnInit {

  @Input() answers: any;
  constructor() {
  }

  ngOnInit() {
  }
}
