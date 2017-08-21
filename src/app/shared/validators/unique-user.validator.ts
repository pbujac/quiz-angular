import {AbstractControl} from "@angular/forms";
import {AuthService} from "../../modules/auth/auth.service";

export class UniqueUserValidation {

  /**
   * @param {AuthService} authService
   *
   * @returns {(control: AbstractControl) => Observable<{userTaken: boolean}>}
   */
  static userExists(authService: AuthService) {

    return (control: AbstractControl) => {

      return authService.getUserByUsername(control.value).subscribe(res => {
        return res? {'userTaken': true} : null;
      });
    }
  }

}
