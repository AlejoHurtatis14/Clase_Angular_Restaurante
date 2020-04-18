import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComidaComponent } from './tarjeta-comida.component';

describe('TarjetaComidaComponent', () => {
  let component: TarjetaComidaComponent;
  let fixture: ComponentFixture<TarjetaComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
