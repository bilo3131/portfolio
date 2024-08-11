import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-message-sent',
  standalone: true,
  imports: [TranslateModule],
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
