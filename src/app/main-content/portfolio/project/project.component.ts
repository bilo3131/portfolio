import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./../portfolio.component.scss', './project.component.scss', './../../../shared/responsive/responsive-portfolio.scss'],
  imports: [TranslateModule],
  standalone: true
})
export class ProjectComponent {

}
