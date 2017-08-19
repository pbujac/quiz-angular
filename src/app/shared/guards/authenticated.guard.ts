import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

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

      return true;
    }
    this.router.navigate(['/login']);

    return false;
  }

}
