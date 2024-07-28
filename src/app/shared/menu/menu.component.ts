import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
})
export class MenuComponent extends AppComponent{

  menuAnimation() {
    document.getElementById('menu')?.classList.toggle('change');
    document.getElementById('mobile-menu')?.classList.toggle('d-none');
  }
}
