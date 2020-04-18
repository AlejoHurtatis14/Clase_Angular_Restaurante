import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { RestauranteService } from '../../servicios/servicios-restaurante-service.service';
import { Router } from '@angular/router';

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

  constructor(private restauranteService: RestauranteService, private router: Router) {
    this.posicion = new EventEmitter();
  }

  ngOnInit(): void {
  }

  eliminarCarrito(pos) {
    this.posicion.emit(pos);
  }

  realizarPedido() {
    if (this.listaComidas.length > 0) {
      this.restauranteService.pedidoComidas(this.listaComidas);
      this.router.navigateByUrl('pedidos');
    }
  }

}
