import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFileInputComponent } from './angular-file-input.component';

describe('AngularFileInputComponent', () => {
  let component: AngularFileInputComponent;
  let fixture: ComponentFixture<AngularFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
