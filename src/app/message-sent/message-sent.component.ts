import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-sent',
  standalone: true,
  imports: [],
  templateUrl: './message-sent.component.html',
  styleUrl: './message-sent.component.scss'
})
export class MessageSentComponent {

  constructor(private router: Router) {

  }

  backToHome(){
    this.router.navigateByUrl('');
  }
}
