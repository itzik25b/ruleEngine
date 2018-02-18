import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-rule-types-list',
  templateUrl: './rule-types-list.component.html',
  styleUrls: ['./rule-types-list.component.scss']
})
export class RuleTypesListComponent implements OnInit, AfterViewInit {
  dataSource;
  displayedColumns = ['Rule type', 'Rule type name', 'Rule sub type', 'Rule Action', 'No. of rules', 'Timestamp'];
  @Input() ruleTypesList;
  @Output() ruleTypeSelected: EventEmitter<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.ruleTypeSelected = new EventEmitter<any>();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Element>(this.ruleTypesList);
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

  ruleTypeClick(idx) {
    this.ruleTypeSelected.emit(this.ruleTypesList[idx].evaluatedRules);
  }
}
