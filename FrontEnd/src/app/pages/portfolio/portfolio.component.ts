import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { persona } from '../../model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent implements OnInit{
  persona: persona = new persona("","", "");

  constructor( public _firebaseService: FirebaseService,
                public _personaService: PersonaService) {
  }

  ngOnInit(): void {
      this._personaService.getPersona().subscribe( data => (this.persona = data))
  }

}
