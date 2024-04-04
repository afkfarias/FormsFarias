import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const nameOnEmailValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let nombre = '';
  nombre =  control.parent?.get('nombre')?.value;
  if (
    typeof control.value === 'string' &&
    control.value.toLowerCase().includes(nombre)
  ) {
    return {
      nameOnEmail: true,
    };
  }

  return null; 
};
