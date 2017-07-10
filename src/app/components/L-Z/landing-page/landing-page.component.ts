import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  clouds: Array<number> = [0,1,2,3,4];
  cloud: string = "../../../../assets/landing-page/cloud.svg";

  constructor() { }

  ngOnInit() {
  }

}
