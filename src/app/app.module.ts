import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderModuleComponent } from './header-module/header-module.component';
import { HeaderNavModuleComponent } from './header-nav-module/header-nav-module.component';
import { GetJsonContentComponent } from './get-json-content/get-json-content.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { CountryNavComponentComponent } from './country-nav-component/country-nav-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderModuleComponent,
    HeaderNavModuleComponent,
    GetJsonContentComponent,
    SearchComponentComponent,
    CountryNavComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
