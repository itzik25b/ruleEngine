import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-rule-conditions',
  templateUrl: './rule-conditions.component.html',
  styleUrls: ['./rule-conditions.component.scss']
})
export class RuleConditionsComponent implements OnInit {
@Input() ruleConditions;
@Input() logicalOperator;
  // toggleValues = false;

  constructor(protected dataService: DataServiceService) {
    // this.toggleValues = dataService.toggleValues;
  }

  ngOnInit() {
    const aa = this.ruleConditions;
  }
}
