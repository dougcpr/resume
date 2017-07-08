import { Component, OnInit } from '@angular/core';
import { GetProjectDataService } from "../../../services/http/get-project-data/get-project-data.service";

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss']
})
export class PortfolioCardsComponent implements OnInit {

  cardData: any;

  constructor(
    public getProjectData: GetProjectDataService
  ) { }

  ngOnInit() {
    /* Subscription to Portfolio Data on MongoDB */
    this.getProjectData.getData("portfolio-data").subscribe((data) => this.cardData = data[0].portfolioData)
  }

}
