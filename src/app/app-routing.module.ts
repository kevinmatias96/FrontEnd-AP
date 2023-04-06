import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AgregarExperienciaComponent } from './pages/agregar-experiencia/agregar-experiencia.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch:'full'},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'agregar-experiencia', component: AgregarExperienciaComponent},
  { path: '**', redirectTo: 'portfolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
