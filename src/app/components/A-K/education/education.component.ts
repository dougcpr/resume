import {Component, OnInit} from '@angular/core';
import { ProjectDataService } from "../../../services/projectData";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  private skillData: any;

  constructor(
    public projectData: ProjectDataService
  ) { }

  ngOnInit() {
    this.skillData = this.projectData.proficiencyData;
  }

}
