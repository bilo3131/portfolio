import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [TranslateModule],
  standalone: true,
})
export class MenuComponent {

  constructor(public translate: TranslateService, public router: Router) { }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  openPage(directory: string) {
    this.router.navigateByUrl(directory);
  }

  menuAnimation() {
    document.getElementById('menu')?.classList.toggle('change');
    document.getElementById('mobile-menu')?.classList.toggle('d-none');
  }
}
