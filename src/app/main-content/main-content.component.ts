import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartComponent } from './start/start.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [StartComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss', './../shared/responsive/responsive-main.scss']
})
export class MainContentComponent {

}
