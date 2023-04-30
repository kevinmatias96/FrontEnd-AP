import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarExperienciaComponent } from './pages/agregar-experiencia/agregar-experiencia.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'agregar-experiencia', component: AgregarExperienciaComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
