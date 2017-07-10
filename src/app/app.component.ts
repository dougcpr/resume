import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  linksArray: any[] = [
    {
      linkName: "home",
      linkAddress: "/home",
      icon: "home"
    },
    {
      linkName: "add_project",
      linkAddress: "/add_project",
      icon: "note_add"
    }
  ];


}
