import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from "../../services/projectData";

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss']
})
export class PortfolioCardsComponent implements OnInit {

  cardData: any;

  constructor(
    public projectData: ProjectDataService
  ) { }

  ngOnInit() {
    this.cardData = this.projectData.data;
  }

}
