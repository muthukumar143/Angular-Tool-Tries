import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NavItem } from '../header/header.component';

@Component({
  selector: 'app-child-menu-items',
  templateUrl: './child-menu-items.component.html',
  styleUrls: ['./child-menu-items.component.css']
})
export class ChildMenuItemsComponent implements OnInit {

  @Input() items: NavItem[];
  @ViewChild('childMenu') public childMenu;

  constructor() { }

  ngOnInit() {
  }

}
