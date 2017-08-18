import {Component, Input} from '@angular/core';
import {Result} from "../../../model/result.model";

@Component({
  selector: 'qz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.scss']
})
export class ResultComponent {

  @Input() result: Result;

  constructor() {
  }

}
