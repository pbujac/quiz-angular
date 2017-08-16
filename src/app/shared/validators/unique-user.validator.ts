import {AbstractControl, FormControl} from "@angular/forms";
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

  // static userNameValidator( authService: AuthService) {
  //   return (control: FormControl): Promise<any> => {
  //     return new Promise<any>((resolve, reject) => {
  //
  //         authService.getUserByUsername(control.value).subscribe(
  //           (res) => {
  //             if (res) {
  //
  //               resolve({'userTaken': true});
  //             } else {
  //               console.log("NOT existing");
  //               resolve(null);
  //             }
  //           },
  //           (error) => {
  //             console.log(error);
  //           }
  //         );
  //
  //         resolve(null);
  //
  //     })
  //   }
  // }

}
