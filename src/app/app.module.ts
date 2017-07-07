import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PortfolioCardsComponent } from './components/L-Z/portfolio-cards/portfolio-cards.component';
import { TimelineComponent } from "./components/L-Z/timeline/timeline.component";
import { ProjectDataService } from "./services/projectData";
import { LandingPageComponent } from './components/L-Z/landing-page/landing-page.component';
import { FootnoteComponent } from './components/A-K/footnote/footnote.component';
import { AboutMeComponent } from './components/A-K/about-me/about-me.component';
import { EducationComponent } from './components/A-K/education/education.component';
import { LoadingScreenComponent } from './components/L-Z/loading-screen/loading-screen.component';
import { ProficiencyBarComponent } from './components/L-Z/proficiency-bar/proficiency-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioCardsComponent,
    TimelineComponent,
    LandingPageComponent,
    FootnoteComponent,
    AboutMeComponent,
    EducationComponent,
    LoadingScreenComponent,
    ProficiencyBarComponent,
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
