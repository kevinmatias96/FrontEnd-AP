import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

// servicios
import { FirebaseService } from "./services/firebase.service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarExperienciaComponent } from './pages/agregar-experiencia/agregar-experiencia.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { interceptorProvider } from './services/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    AgregarExperienciaComponent,
    HeaderComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FirebaseService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
