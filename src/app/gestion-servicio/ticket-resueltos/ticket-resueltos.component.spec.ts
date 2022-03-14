import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketResueltosComponent } from './ticket-resueltos.component';

describe('TicketResueltosComponent', () => {
  let component: TicketResueltosComponent;
  let fixture: ComponentFixture<TicketResueltosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketResueltosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketResueltosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
