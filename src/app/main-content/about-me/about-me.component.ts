import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './../../shared/responsive/responsive-about-me.scss'],
  imports: [TranslateModule],
  standalone: true,
})
export class AboutMeComponent {

}
