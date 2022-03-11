import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEventsComponent } from './listar-events.component';

describe('ListarEventsComponent', () => {
  let component: ListarEventsComponent;
  let fixture: ComponentFixture<ListarEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
