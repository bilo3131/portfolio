import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartComponent } from './start/start.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [StartComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent, MenuComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

}
