import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleEngineStepperComponent } from './rule-engine-stepper.component';

describe('RuleEngineStepperComponent', () => {
  let component: RuleEngineStepperComponent;
  let fixture: ComponentFixture<RuleEngineStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleEngineStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleEngineStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
