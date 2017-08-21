import {Component, Input} from '@angular/core';
import {Result} from "../../../model/result.model";
import {Router} from "@angular/router";

@Component({
  selector: 'qz-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.scss']
})
export class FinalResultComponent {

  @Input() result: Result;
  protected maxScore: number;

  /**
   * @param {Router} router
   */
  constructor(private router: Router) {
    this.maxScore = 70;
  }

  public onViewResults(){
    this.router.navigate(['/user-results']);
  }
}
