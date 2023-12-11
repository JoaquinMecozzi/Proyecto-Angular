import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { EmpleadosService } from '../services/empleados.service';
import { EmpleadoAgregarEditarComponent } from '../empleado-agregar-editar/empleado-agregar-editar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'email',
    'fechadenacimiento',
    'genero',
    'education',
    'institucion',
    'telefono',
    'sueldo',
    'accion',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmpleadosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmpleado();
  }
  openModal() {
    const dialogRef = this._dialog.open(LoginComponent);
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(EmpleadoAgregarEditarComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpleado();
        }
      },
    });
  }

  getEmpleado() {
    this._empService.getEmpleado().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarEmpleado(id: number) {
    this._empService.eliminarEmpleado(id).subscribe({
      next: (res) => {
        alert('EMPLEADO ELIMINADO');
        this.getEmpleado();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpleadoAgregarEditarComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpleado();
        }
      },
    });
  }
  redirigirAreas() {
    this.router.navigate(['/areas']);
  }
}
