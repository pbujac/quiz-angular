import { AuthService } from '../../../modules/auth/auth.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { AuthenticatedGuard } from '../../guards/authenticated.guard';

@Component({
    selector: 'qz-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.scss']
})
export class NavbarComponent {

    constructor(authGuard: AuthenticatedGuard,
        private authService: AuthService) {
    }

    onLogout(){
        this.authService.logout();
    }
}