import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fichadas',
  templateUrl: './fichadas.component.html',
  styleUrls: ['./fichadas.component.scss']
})
export class FichadasComponent implements OnInit {
  id: number | undefined;
  fecha: string | undefined;
  entrada: string | undefined;
  salida: string | undefined;
  opciones: any[] | undefined;
  dialogRef: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/empleados').subscribe((data: any[]) => {
      this.opciones = data;
    });
  }

  enviarDatos() {
    if (this.id != null && this.fecha != null && this.entrada != null && this.salida != null) {
      const data = {
        id: this.id,
        diaTrabajado: this.fecha,
        entrada: this.entrada,
        salida: this.salida
      };
      this.http.post('http://localhost:3000/empleados', data).subscribe(response => {
        console.log('Datos guardados correctamente:', response);
        this.dialogRef.close();
      });
    } else {
      alert('Error al guardar los datos: Campos inválidos');
      // Aquí puedes manejar el error de alguna manera
      this.dialogRef.close();
    }
  }
  
}

