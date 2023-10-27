import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpleadosService } from '../services/empleados.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-empleado-agregar-editar',
  templateUrl: './empleado-agregar-editar.component.html',
  styleUrls: ['./empleado-agregar-editar.component.scss']
})
export class EmpleadoAgregarEditarComponent implements OnInit {
  
  empForm: FormGroup;

  educacion: string[]=[
    'PRIMARIO',
    'SECUNDARIO',
    'TERCIARIO',
    'UNIVERSITARIO',
    'SIN ESTUDIO'
  ];

  constructor(private _fb: FormBuilder, 
    private _empService:EmpleadosService, 
    private _dialogRef: MatDialogRef<EmpleadoAgregarEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any)
    {
    this.empForm = this._fb.group({
      nombre:'',
      apellido:'',
      email: '',
      fechadenacimiento:'',
      genero:'',
      education:'',
      institucion:'',
      telefono:'',
      sueldo:'',

    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnit():void{
    this.empForm.patchValue(this.data)
  }
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empService.actualizarEmpleado(this.data.id,this.empForm.value).subscribe({
          next:(val:any) =>{
            alert('EMPLEADO ACTUALIZADO CORRECTAMENTE')
            this._dialogRef.close(true);
  
          },
          error:(err:any) =>{
            console.error(err);
          }
        })
      }else{
      this._empService.agregarEmpleado(this.empForm.value).subscribe({
        next:(val:any) =>{
          alert('EMPLEADO AGREGADO CORRECTAMENTE')
          this._dialogRef.close(true);

        },
        error:(err:any) =>{
          console.error(err);
        }
      })}
    }
  }
  
}