import { Component, OnInit } from '@angular/core';
import { GetProjectDataService } from "../../../services/http/get-project-data/get-project-data.service";
import { ProficienciesService } from "../../../services/data/proficiencies.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  private skillData: any;

  constructor(
    //public getProjectData: GetProjectDataService,
    public getPortfolioData: ProficienciesService
  ) { }

  ngOnInit() {
    /* Subscription to Proficiency Data on MongoDB */
    //this.getProjectData.getData("proficiency-data").subscribe((data) => this.skillData = data[0].proficiencyData)

    this.skillData = this.getPortfolioData.proficiencyData
  }

}
