import { Component, Input, Inject } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'modal-result',
  templateUrl: '/modal-result.component.html',
  styleUrls: ['modal-result.component.scss']

})
export class DialogComponent {

  constructor( @Inject(MD_DIALOG_DATA) public result: any) {
  }
}
