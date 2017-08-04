import { AbstractControl } from '@angular/forms';

export function UrlValidator(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.com')) {
    return { validUrl: true };
  }
  return null;
}