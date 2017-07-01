import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PortfolioCardsComponent } from './components/portfolio-cards/portfolio-cards.component';
import { TimelineComponent } from "./components/timeline/timeline.component";
import { ProjectDataService } from "./services/projectData";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortfolioCardsComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProjectDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
