import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() bindMenu: Menu;

  @Output() selectedMenu = new EventEmitter<void>();

  onSelectMenu() {
    this.selectedMenu.emit();
  }

}
