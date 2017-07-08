import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.scss']
})
export class MenuNavigationComponent implements OnInit {

  @Input() links;

  constructor() { }

  ngOnInit() {
  }

}
