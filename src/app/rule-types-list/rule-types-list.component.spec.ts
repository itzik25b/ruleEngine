import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleTypesListComponent } from './rule-types-list.component';

describe('RuleTypesListComponent', () => {
  let component: RuleTypesListComponent;
  let fixture: ComponentFixture<RuleTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
