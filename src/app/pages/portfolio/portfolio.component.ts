import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
  ]
})
export class PortfolioComponent {

  constructor( public _firebaseService: FirebaseService) {
  }

}
