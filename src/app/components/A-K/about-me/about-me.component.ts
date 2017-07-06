import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from "../../../services/projectData";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  cardData: any;

  constructor(
    public projectData: ProjectDataService
  ) { }

  ngOnInit() {
    this.cardData = this.projectData.aboutMe;
  }

}
