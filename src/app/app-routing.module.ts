import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './areas/areas.component';

const routes: Routes = [
  { 
    path:'', redirectTo: 'home', pathMatch:'full'},
    {path: 'areas', component: AreasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }