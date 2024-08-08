import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: true,
  imports: [ProjectComponent, TranslateModule]
})
export class PortfolioComponent {

}
