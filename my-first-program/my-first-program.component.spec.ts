import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstProgramComponent } from './my-first-program.component';

describe('MyFirstProgramComponent', () => {
  let component: MyFirstProgramComponent;
  let fixture: ComponentFixture<MyFirstProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
