import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(public translate: TranslateService) {}

  onActivate(event: Component) {
    if (event.constructor.name === "PrivacyPolicyComponent" ){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
