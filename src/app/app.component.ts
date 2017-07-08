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
