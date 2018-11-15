import { Component } from '@angular/core';
import { Menu } from './menu/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-tool-prj';

  selectedMenu: Menu;

}
