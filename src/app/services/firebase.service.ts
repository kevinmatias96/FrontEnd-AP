import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  experiencia: any = [];
  exp_cargada: boolean = false;

  habilidades: any = [];
  skill_cargada: boolean = false;

  constructor( public http:HttpClient) { 

    this.cargaExperiencia();
    this.cargaAbout();
  }
  
    public cargaExperiencia() {
      this.http.get('https://portfolio-ap-48c78-default-rtdb.firebaseio.com/experiencia.json')
                  .subscribe( data => {
                    console.log(data);
                    
                    this.experiencia = data;
                    this.exp_cargada = true;
                    
                    console.log(this.experiencia[1]);
                    
                  })
    }


    public cargaAbout() {
      this.http.get('https://portfolio-ap-48c78-default-rtdb.firebaseio.com/about.json')
                  .subscribe( datos => {
                    console.log(datos);
                    
                    this.habilidades = datos;
                    this.skill_cargada = true;
                    
                    console.log(this.habilidades[1]);
                    
                  })
    }
}
