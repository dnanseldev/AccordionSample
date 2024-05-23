import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceAccordionComponent } from './nice-accordion.component';
import { NiceAccordionItemComponent } from './nice-accordion-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [
    NiceAccordionComponent,
    NiceAccordionItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NiceAccordionComponent,
    NiceAccordionItemComponent
  ],
  providers: [provideAnimationsAsync()],
})
export class NiceAccordionModule { }
