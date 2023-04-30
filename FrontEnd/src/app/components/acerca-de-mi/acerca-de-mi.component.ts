import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styles: [
  ]
})
export class AcercaDeMiComponent {

  constructor( public _firebaseService: FirebaseService) {
  }
}
