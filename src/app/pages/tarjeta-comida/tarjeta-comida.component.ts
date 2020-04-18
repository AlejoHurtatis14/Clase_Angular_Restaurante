import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta-comida',
  templateUrl: './tarjeta-comida.component.html',
  styleUrls: ['./tarjeta-comida.component.css']
})
export class TarjetaComidaComponent implements OnInit {

  @Input() comida: object;
  @Input() agregarMas: boolean;
  @Output() agregadaAlCarrito: EventEmitter<object>

  constructor() {
    this.agregadaAlCarrito = new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregarCarrito(comida) {
    this.agregadaAlCarrito.emit(comida);
  }

}
