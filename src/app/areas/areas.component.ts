import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FichadasComponent } from '../fichadas/fichadas.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent {
  constructor(private dialog: MatDialog) { }


  abrirFormulario() {
    const dialogRef = this.dialog.open(FichadasComponent, {
      width: '700px', 
      disableClose: true 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
