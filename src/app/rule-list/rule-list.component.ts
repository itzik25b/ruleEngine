import {AfterViewInit, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {ConditionsBuilderService} from '../conditions-builder.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit, AfterViewInit {
  @Input() ruleList;
  @Output() singleRuleClick: EventEmitter<any>;
  dataSource;
  displayedColumns = ['Rule name', 'Rule action', 'Rule activated'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private conditionsBuilder: ConditionsBuilderService) {
    this.singleRuleClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Element>(this.ruleList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  singleRuleClicked(idx) {
    const tree = this.conditionsBuilder.buildTreeFromBinaryTree(this.ruleList[idx].ruleConditionsEvaluation.conditionDisplay);
    this.singleRuleClick.emit(tree);
  }

}
