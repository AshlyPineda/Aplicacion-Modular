import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPendientesComponent } from './ticket-pendientes.component';

describe('TicketPendientesComponent', () => {
  let component: TicketPendientesComponent;
  let fixture: ComponentFixture<TicketPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
