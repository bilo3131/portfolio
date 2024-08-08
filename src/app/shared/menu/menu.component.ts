import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [TranslateModule],
  standalone: true,
})
export class MenuComponent {

  constructor(public translate: TranslateService) { }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  menuAnimation() {
    document.getElementById('menu')?.classList.toggle('change');
    document.getElementById('mobile-menu')?.classList.toggle('d-none');
  }
}
