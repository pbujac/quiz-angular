import {AbstractControl} from '@angular/forms';

/**
 * @param {AbstractControl} control
 *
 * @returns {any}
 */
export function ValidCheckBoxValidation(control: AbstractControl) {

  if (control.value == false) {

    return {'checked': true};
  }

  return null;
}
