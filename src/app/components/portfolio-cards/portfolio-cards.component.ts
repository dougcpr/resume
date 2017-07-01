import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss']
})
export class PortfolioCardsComponent implements OnInit {

  tempArray: Array<number> = [0,1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
