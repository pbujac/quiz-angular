import {AbstractControl} from '@angular/forms';

/**
 * @param {AbstractControl} control
 *
 * @returns {any}
 */
export function MatchPasswordValidation(control: AbstractControl) {

  if (control.get('password').value != control.get('confirmPassword').value) {
    control.get('confirmPassword').setErrors({matchPassword: true});
  }

  return null;
}
