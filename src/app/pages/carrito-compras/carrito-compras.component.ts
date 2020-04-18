import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  @Input() totalComidas: number;
  @Input() listaComidas: Array<object>;
  @Output() posicion: EventEmitter<number>;

  faShoppingCart = faShoppingCart;

  constructor() {
    this.posicion = new EventEmitter();
  }

  ngOnInit(): void {
  }

  eliminarCarrito(pos) {
    this.posicion.emit(pos);
  }

}
