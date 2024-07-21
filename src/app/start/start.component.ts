import { Component } from '@angular/core';
import * as Aos from 'aos';
// import AOS from 'aos'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  ngOnInit() {
    Aos.init();
  }
}
