import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCardModalComponent } from './kanban-card-modal.component';

describe('KanbanCardModalComponent', () => {
  let component: KanbanCardModalComponent;
  let fixture: ComponentFixture<KanbanCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanCardModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
