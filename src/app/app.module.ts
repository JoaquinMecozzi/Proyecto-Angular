import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmpleadoAgregarEditarComponent } from './empleado-agregar-editar/empleado-agregar-editar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AreasComponent } from './areas/areas.component';
import { HomeComponent } from './home/home.component';
import { FichadasComponent } from './fichadas/fichadas.component';






@NgModule({
  declarations: [
    AppComponent,
    EmpleadoAgregarEditarComponent,
    LoginComponent,
    AreasComponent,
    HomeComponent,
    FichadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
