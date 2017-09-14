import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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

export const router: Routes = [
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
    { path: 'countrieselse', component: CountrieselseComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);