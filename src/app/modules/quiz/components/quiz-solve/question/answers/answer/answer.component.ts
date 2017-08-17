import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'qz-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.scss']
})
export class AnswerComponent implements OnInit {

  @Input() answer: any;

  constructor() { }

  ngOnInit() {
  }

}
