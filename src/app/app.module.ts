import { DynamicFormQuestionComponent } from './dymanic-forms/dynamic-form/dynamic-form-question.component';
import { DynamicFormComponent } from './dymanic-forms/dynamic-form/dynamic-form.component';

import { HeroListComponent } from './reactive forms/hero-list/hero-list.component';
import { HeroDetailComponent } from './reactive forms/hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { HeroFormTemplateDrivenComponent } from './hero-form-template-driven/hero-form-template-driven.component';






@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroFormReactiveComponent,
    HeroFormTemplateDrivenComponent,
    ForbiddenValidatorDirective,
    HeroDetailComponent,
    HeroListComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
