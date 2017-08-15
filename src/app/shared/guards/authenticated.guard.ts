import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  /**
   * @type {boolean}
   */
  private isLoggedIn: boolean = false;

  /**
   * @param {Router} router
   */
  constructor(private router: Router) {
  }

  /**
   * @returns {boolean}
   */
  public canActivate(): boolean {

    if (localStorage.getItem('authentication')) {
      this.isLoggedIn = true;

      return this.isLoggedIn;
    }
    this.router.navigate(['/login']);

    return this.isLoggedIn;
  }

}
