import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedTestWithTemplateComponent } from './integrated-test-with-template.component';

describe('IntegratedTestWithTemplateComponent', () => {
  let component: IntegratedTestWithTemplateComponent;
  let fixture: ComponentFixture<IntegratedTestWithTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegratedTestWithTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedTestWithTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
