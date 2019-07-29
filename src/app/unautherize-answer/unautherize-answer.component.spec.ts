import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnautherizeAnswerComponent } from './unautherize-answer.component';

describe('UnautherizeAnswerComponent', () => {
  let component: UnautherizeAnswerComponent;
  let fixture: ComponentFixture<UnautherizeAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnautherizeAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnautherizeAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
