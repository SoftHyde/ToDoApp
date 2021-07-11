import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAbiertaComponent } from './lista-abierta.component';

describe('ListaAbiertaComponent', () => {
  let component: ListaAbiertaComponent;
  let fixture: ComponentFixture<ListaAbiertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAbiertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAbiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
