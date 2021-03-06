import { Component, OnInit } from '@angular/core';
import { GetProjectDataService } from "../../../services/http/get-project-data/get-project-data.service";
import { AboutMeService } from "../../../services/data/about-me.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe: any;

  constructor(
    //public getProjectData: GetProjectDataService,
    public getAboutMeData: AboutMeService
  ) { }

  ngOnInit() {
    /* Subscription to About Me Data on MongoDB */
    //this.getProjectData.getData("about-me-data").subscribe((data) => this.aboutMe = data[0].aboutMe)

    this.aboutMe = this.getAboutMeData.aboutMe;
  }

}
