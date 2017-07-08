import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  linksArray: any[] = [
    {
      linkName: "add_project",
      linkAddress: "/add_project",
      icon: "note_add"
    },
    {
      linkName: "home",
      linkAddress: "/home",
      icon: "home"
    },
  ];

  footnoteArray: any[] = [
    {
      linkAddress: "www.twitter.com",
      icon: "../assets/icons/twitter.png",
    },
    {
      linkAddress: "www.facebook.com",
      icon: "../assets/icons/facebook.png",
    },
    {
      linkAddress: "",
      icon: "../assets/icons/mail.svg",
    },
  ]

}
