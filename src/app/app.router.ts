import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './page-module/main-page/main-page.component';
import { NewsPageComponent } from './page-module/news-page/news-page.component';
import { ScoreboardPageComponent } from './page-module/scoreboard-page/scoreboard-page.component';
import { VideoPageComponent } from './page-module/video-page/video-page.component';
import { GalleriesPageComponent } from './page-module/galleries-page/galleries-page.component';
import { TvschedulePageComponent } from './page-module/tvschedule-page/tvschedule-page.component';
import { ConferencesPageComponent } from './page-module/conferences-page/conferences-page.component';
import { BlogPageComponent } from './page-module/blog-page/blog-page.component';

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

import {DossierComponent} from "./footbal-team-dossier/dossier/dossier.component";

export const router: Routes = [

    //page routing
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainPageComponent },
    { path: 'newsarc', component: NewsPageComponent },
    { path: 'scoreboard', component: ScoreboardPageComponent },
    { path: 'video', component: VideoPageComponent },
    { path: 'galleries', component: GalleriesPageComponent },
    { path: 'tvschedule', component: TvschedulePageComponent },
    { path: 'conferences', component: ConferencesPageComponent },
    { path: 'blog', component: BlogPageComponent },

    //country routing
    { path: 'ukraine', component: UkraineComponent },
    { path: 'england', component: EnglandComponent },
    { path: 'germany', component: GermanyComponent },
    { path: 'spain', component: SpainComponent },
    { path: 'italy', component: ItalyComponent },
    { path: 'netherlands', component: NetherlandsComponent },
    { path: 'portugal', component: PortugalComponent },
    { path: 'northamerica', component: NorthamericaComponent },
    { path: 'turkey', component: TurkeyComponent },
    { path: 'france', component: FranceComponent },
    { path: 'countrieselse', component: CountrieselseComponent },

    //football teams routing
    { path: 'team', component: DossierComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);