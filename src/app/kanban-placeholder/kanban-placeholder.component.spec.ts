import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanPlaceholderComponent } from './kanban-placeholder.component';

describe('KanbanPlaceholderComponent', () => {
  let component: KanbanPlaceholderComponent;
  let fixture: ComponentFixture<KanbanPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
