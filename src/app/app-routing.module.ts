import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '',component: HomeComponent},
    {path: 'areas', component: AreasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }