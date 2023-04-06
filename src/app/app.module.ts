import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// servicios
import { FirebaseService } from "./services/firebase.service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AgregarExperienciaComponent } from './pages/agregar-experiencia/agregar-experiencia.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PortfolioComponent,
    AgregarExperienciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
