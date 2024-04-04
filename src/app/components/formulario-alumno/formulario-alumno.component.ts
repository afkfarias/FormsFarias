import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { nameOnEmailValidator } from '../../utils/validatorsAlumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.scss'
})
export class FormularioAlumnoComponent {

   
    formAlumno : FormGroup;

    constructor(protected fb: FormBuilder){
       this.formAlumno = this.fb.group(
         {
           nombre: ['', [Validators.maxLength(50), Validators.required]],
           apellido: ['', [Validators.maxLength(50), Validators.required]],
           cuil: ['', [Validators.maxLength(11), Validators.required, Validators.pattern('^(20|23|24|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$')]],
           email: ['', [Validators.required , Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'), nameOnEmailValidator]],
           edad: ['', [Validators.required,Validators.min(18), Validators.max(60)]],
           telefono: ['', Validators.required] 
         } 
       ); 
    }

    save() {
      console.log(this.formAlumno)
      this.formAlumno.disable();
      
      }

      reset() {
      
        this.formAlumno.reset();
        this.formAlumno.enable();
        console.log(this.formAlumno)
        }  
}
