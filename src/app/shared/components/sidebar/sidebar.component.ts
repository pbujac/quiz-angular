import { Component, Output, EventEmitter } from '@angular/core';
import { AuthenticatedGuard } from '../../guards/authenticated.guard';

@Component({
    selector: 'qz-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.scss']
})
export class SidebarComponent {

    constructor(authGuard: AuthenticatedGuard){
    }
}