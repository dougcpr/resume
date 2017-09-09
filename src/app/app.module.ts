import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Components */
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PortfolioCardsComponent } from './components/L-Z/portfolio-cards/portfolio-cards.component';
import { TimelineComponent } from "./components/L-Z/timeline/timeline.component";
import { LandingPageComponent } from './components/L-Z/landing-page/landing-page.component';
import { FootnoteComponent } from './components/A-K/footnote/footnote.component';
import { AboutMeComponent } from './components/A-K/about-me/about-me.component';
import { EducationComponent } from './components/A-K/education/education.component';
import { LoadingScreenComponent } from './components/L-Z/loading-screen/loading-screen.component';
import { ProficiencyBarComponent } from './components/L-Z/proficiency-bar/proficiency-bar.component';

/* Services */
import { GetProjectDataService } from "./services/http/get-project-data/get-project-data.service";
import { ProficienciesService } from "./services/data/proficiencies.service";
import { PortfolioService } from "./services/data/portfolio.service";
import { AboutMeService } from "./services/data/about-me.service";
import { TimelineService } from "./services/data/timeline.service";

/* Views */
import { HomeComponent } from "./views/home/home.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";

/* CSS Imports */
import { MdDatepickerModule, MdInputModule, MdListModule, MdMenuModule ,MdNativeDateModule, MdRadioModule, MdButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
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
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdListModule,
    ReactiveFormsModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdButtonModule,
    FileUploadModule,
    MdMenuModule
  ],
  exports: [MdListModule],
  providers: [GetProjectDataService, AboutMeService, ProficienciesService, PortfolioService, TimelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
