import { Component, OnInit } from '@angular/core';
import { GetProjectDataService } from "../../../services/http/get-project-data/get-project-data.service";
import {PortfolioService} from "../../../services/data/portfolio.service";

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss']
})
export class PortfolioCardsComponent implements OnInit {

  cardData: any;

  constructor(
    //public getProjectData: GetProjectDataService,
    public getPortfolioData: PortfolioService
  ) { }

  ngOnInit() {
    /* Subscription to portfolio Data on MongoDB */
    //this.getProjectData.getData("portfolio-data").subscribe((data) => this.cardData = data[0].portfolioData)
    this.cardData = this.getPortfolioData.portfolioData;
  }

}
