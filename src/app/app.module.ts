import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PortfolioCardsComponent } from './components/portfolio-cards/portfolio-cards.component';
import { TimelineComponent } from "./components/timeline/timeline.component";
import { ProjectDataService } from "./services/projectData";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FootnoteComponent } from './components/footnote/footnote.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortfolioCardsComponent,
    TimelineComponent,
    LandingPageComponent,
    FootnoteComponent,
    AboutMeComponent,
    EducationComponent,
    LoadingScreenComponent,
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
