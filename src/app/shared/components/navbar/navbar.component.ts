import {Component} from '@angular/core';
import {AuthService} from "../../../modules/auth/auth.service";

@Component({
  selector: 'qz-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.scss']
})
export class NavbarComponent {

  /**
   * @param {AuthService} authService
   */
  constructor(private authService: AuthService) {
  }

  public onLogout(): void {

    this.authService.logout();
  }

  public isAuthenticated (): boolean {

    return this.authService.isAuthenticated();
  }


}
