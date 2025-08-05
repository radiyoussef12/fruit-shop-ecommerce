import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudactComponent } from './proudact.component';

describe('ProudactComponent', () => {
  let component: ProudactComponent;
  let fixture: ComponentFixture<ProudactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProudactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
