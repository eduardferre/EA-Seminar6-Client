import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodoComponent } from './listar-todo.component';

describe('ListarTodoComponent', () => {
  let component: ListarTodoComponent;
  let fixture: ComponentFixture<ListarTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
