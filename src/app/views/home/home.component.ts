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
      linkAddress: "https://bitbucket.org/dougcpr/",
      icon: "../assets/icons/bitbucket.png",
    },
    {
      linkAddress: "http://www.facebook.com",
      icon: "../assets/icons/facebook.png",
    },
    {
      linkAddress: "https://github.com/dougcpr",
      icon: "../assets/icons/github.png",
    },
    {
      linkAddress: "https://www.linkedin.com/in/douglas-cooper-08ab6b72/",
      icon: "../assets/icons/linkedin.png",
    }
  ]

}
