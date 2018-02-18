import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { RuleEngineStepperComponent } from './rule-engine-stepper/rule-engine-stepper.component';
import { RuleTypesListComponent } from './rule-types-list/rule-types-list.component';
import {DataServiceService} from './data-service.service';
import {MatPaginatorModule, MatSlideToggleModule, MatSortModule, MatStepper} from '@angular/material';
import {RuleListComponent} from './rule-list/rule-list.component';
import { RuleConditionsComponent } from './rule-conditions/rule-conditions.component';
import {ConditionsBuilderService} from './conditions-builder.service';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    RuleEngineStepperComponent,
    RuleTypesListComponent,
    RuleListComponent,
    RuleConditionsComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule
  ],
  providers: [DataServiceService, ConditionsBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
