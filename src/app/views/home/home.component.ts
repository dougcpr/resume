import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  footnoteArray: any[] = [
    {
      linkAddress: "http://www.twitter.com",
      icon: "../assets/icons/twitter.png",
    },
    {
      linkAddress: "http://www.facebook.com",
      icon: "../assets/icons/facebook.png",
    },
    {
      linkAddress: "",
      icon: "../assets/icons/mail.svg",
    },
    {
      linkAddress: "https://github.com/dougcpr",
      icon: "../assets/icons/github.png",
    },
  ]

}
