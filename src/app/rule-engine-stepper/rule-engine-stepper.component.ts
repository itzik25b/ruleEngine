import {Component, Input, OnInit} from '@angular/core';
import {MatStepper} from '@angular/material';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-rule-engine-stepper',
  templateUrl: './rule-engine-stepper.component.html',
  styleUrls: ['./rule-engine-stepper.component.scss']
})
export class RuleEngineStepperComponent implements OnInit {
  stepperIdx = 0;
  ruleList = undefined;
  singleRuleConditions = undefined;

  constructor(private dataService: DataServiceService) {

  }

  ngOnInit() {
  }

  toggleValues() {
    this.dataService.toggleValue();
  }

  stepChanged($event) {
    this.stepperIdx = $event.selectedIndex;
  }

  onRuleTypeSelected(ruleData) {
    this.ruleList = ruleData;
    this.stepperIdx = 1;
}

  onSingleRuleClick(ruleConditions) {
    this.singleRuleConditions = ruleConditions;
    this.stepperIdx = 2;
  }
}
