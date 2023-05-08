import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  persona: persona = new persona("","", "");

  constructor( public _firebaseService: FirebaseService,
                public _personaService: PersonaService) {
  }

  ngOnInit(): void {
      this._personaService.getPersona().subscribe( data => (this.persona = data))
  }
}
