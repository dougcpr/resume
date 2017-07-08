import { Component, OnInit } from '@angular/core';
import { GetProjectDataService } from "../../../services/http/get-project-data/get-project-data.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  private skillData: any;

  constructor(
    public getProjectData: GetProjectDataService
  ) { }

  ngOnInit() {
    /* Subscription to Proficiency Data on MongoDB */
    this.getProjectData.getData("proficiency-data").subscribe((data) => this.skillData = data[0].proficiencyData)
  }

}
