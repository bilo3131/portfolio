import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
})
export class MenuComponent {

  english: boolean = true;
  german: boolean = false;

  constructor(public translateService: TranslateService) { }

  switchLanguage(language: string) {
    this.translateService.use(language);
    if (language === 'en') {
      this.english = true;
      this.german = false;
    } else if (language === 'de') {
      this.english = false;
      this.german = true;
    }
  }



  menuAnimation() {
    document.getElementById('menu')?.classList.toggle('change');
    document.getElementById('mobile-menu')?.classList.toggle('d-none');
  }
}
