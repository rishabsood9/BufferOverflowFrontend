import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAnswersComponent } from './your-answers.component';

describe('YourAnswersComponent', () => {
  let component: YourAnswersComponent;
  let fixture: ComponentFixture<YourAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
