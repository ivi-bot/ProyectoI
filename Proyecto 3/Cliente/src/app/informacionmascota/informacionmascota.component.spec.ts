import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionmascotaComponent } from './informacionmascota.component';

describe('InformacionmascotaComponent', () => {
  let component: InformacionmascotaComponent;
  let fixture: ComponentFixture<InformacionmascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionmascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
