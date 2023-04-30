import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: [
  ]
})
export class ExperienciaComponent {
  constructor( public _firebaseService: FirebaseService) {
  }
}
