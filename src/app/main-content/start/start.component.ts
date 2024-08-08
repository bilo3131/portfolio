import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  imports: [TranslateModule],
  standalone: true,
})
export class StartComponent {
  ngOnInit() {
    Aos.init();
  }
}
