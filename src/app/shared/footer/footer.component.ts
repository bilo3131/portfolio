import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [TranslateModule],
  standalone: true,
})
export class FooterComponent {

  constructor(private router: Router) {

  }

  openPage(directory: string) {
    this.router.navigateByUrl(directory);
  }
}
