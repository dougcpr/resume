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
    },
    {
      linkName: "education",
    },
    {
      linkName: "project window",
    },
    {
      linkName: "timeline",
    },
  ];

  footnoteArray: any[] = [
    {
      linkName: "twitter",
      icon: "note_add"
    },
    {
      linkName: "facebook",
      icon: "face"
    },
    {
      linkName: "mail",
      icon: "mail"
    },
  ]

}
