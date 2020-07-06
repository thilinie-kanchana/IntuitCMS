import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationExamComponent } from './certification-exam.component';

describe('CertificationExamComponent', () => {
  let component: CertificationExamComponent;
  let fixture: ComponentFixture<CertificationExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
