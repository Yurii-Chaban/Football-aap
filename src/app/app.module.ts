import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HeaderModuleComponent } from './header-module/header-module.component';
import { HeaderNavModuleComponent } from './header-nav-module/header-nav-module.component';
import { GetJsonContentComponent } from './get-json-content/get-json-content.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { CountryNavComponentComponent } from './country-nav-component/country-nav-component.component';
import { TopSubjectsComponent } from './top-subjects/top-subjects.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { TopFootballTeamsComponent } from './top-football-teams/top-football-teams.component';
import { PreFooterTopNavComponent } from './prefooter-module/prefooter-top-nav/prefooter-top-nav.component';
import { UkraineLinkListComponent } from './prefooter-module/ukraine-link-list/ukraine-link-list.component';
import { FooterComponent } from './footer/footer.component';

import { UkraineComponent } from './country-module/ukraine/ukraine.component';
import { EnglandComponent } from './country-module/england/england.component';
import { GermanyComponent } from './country-module/germany/germany.component';
import { SpainComponent } from './country-module/spain/spain.component';
import { ItalyComponent } from './country-module/italy/italy.component';
import { NetherlandsComponent } from './country-module/netherlands/netherlands.component';
import { PortugalComponent } from './country-module/portugal/portugal.component';
import { NorthamericaComponent } from './country-module/northamerica/northamerica.component';
import { TurkeyComponent } from './country-module/turkey/turkey.component';
import { FranceComponent } from './country-module/france/france.component';
import { CountrieselseComponent } from './country-module/countrieselse/countrieselse.component';

import { MainPageComponent } from './page-module/main-page/main-page.component';
import { NewsPageComponent } from './page-module/news-page/news-page.component';
import { ScoreboardPageComponent } from './page-module/scoreboard-page/scoreboard-page.component';
import { VideoPageComponent } from './page-module/video-page/video-page.component';
import { GalleriesPageComponent } from './page-module/galleries-page/galleries-page.component';
import { TvschedulePageComponent } from './page-module/tvschedule-page/tvschedule-page.component';
import { ConferencesPageComponent } from './page-module/conferences-page/conferences-page.component';
import { BlogPageComponent } from './page-module/blog-page/blog-page.component';
import { DossierComponent } from './footbal-team-dossier/dossier/dossier.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderModuleComponent,
    HeaderNavModuleComponent,
    GetJsonContentComponent,
    SearchComponentComponent,
    CountryNavComponentComponent,
    TopSubjectsComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    TopFootballTeamsComponent,
    PreFooterTopNavComponent,
    UkraineLinkListComponent,
    FooterComponent,
    UkraineComponent,
    EnglandComponent,
    GermanyComponent,
    SpainComponent,
    ItalyComponent,
    NetherlandsComponent,
    PortugalComponent,
    NorthamericaComponent,
    TurkeyComponent,
    FranceComponent,
    CountrieselseComponent,
    MainPageComponent,
    NewsPageComponent,
    ScoreboardPageComponent,
    VideoPageComponent,
    GalleriesPageComponent,
    TvschedulePageComponent,
    ConferencesPageComponent,
    BlogPageComponent,
    DossierComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
