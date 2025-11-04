import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', './../../shared/responsive/responsive-my-skills.scss'],
  imports: [TranslateModule],
  standalone: true,
})
export class MySkillsComponent {

}
