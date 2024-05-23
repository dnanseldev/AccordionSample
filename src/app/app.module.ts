import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NiceAccordionModule } from './nice-accordion/nice-accordion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NiceAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
