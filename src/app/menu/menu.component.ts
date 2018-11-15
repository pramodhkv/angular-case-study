import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menus: Menu[] = [
    new Menu('Booking', 'This is a booking area', 'https://myheartbeets.com/wp-content/uploads/2013/12/indian-okra-recipe-bhindi.jpg'),
    new Menu('Overview', 'This is an overview area', 'https://myheartbeets.com/wp-content/uploads/2013/12/indian-okra-recipe-bhindi.jpg')
  ];

  @Output() menuWasSelected = new EventEmitter<Menu>();

  onMenuSelection(selectedMenu: Menu) {
    this.menuWasSelected.emit(selectedMenu);
  }

}
