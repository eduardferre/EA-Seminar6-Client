import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEventComponent } from './crear-event.component';

describe('CrearEventComponent', () => {
  let component: CrearEventComponent;
  let fixture: ComponentFixture<CrearEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
