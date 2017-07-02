import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  linksArray: any[] = [
    {
      linkName: "about me",
      icon: "note_add"
    },
    {
      linkName: "project spotlight",
      icon: "note_add"
    },
    {
      linkName: "history",
      icon: "note_add"
    },
  ]

}
