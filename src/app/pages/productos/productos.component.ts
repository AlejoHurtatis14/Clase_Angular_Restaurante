import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/servicios/servicios-restaurante-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  comidasRestaurante: Array<object> = [];
  comidasAgregadas: Array<object> = [];
  valorComidas = 0;

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
    /* this.restauranteService.obtenerPlatos().subscribe((respuesta: Array<object>) => {
      if (respuesta['success']) {
        console.log("Holaaaaa ", respuesta['mensaje']);
        this.comidasRestaurante = respuesta['mensaje'];
      }
    }); */
    this.comidasRestaurante = this.restauranteService.obtenerPlatos();
  }

  agregarCarrito(comida) {
    const posicion = this.buscarProductro(comida);
    if (posicion === null) {
      comida['cantidad'] = 1;
      this.comidasAgregadas.push(comida);
    } else {
      this.comidasAgregadas[posicion]['cantidad']++;
    }
    this.totalComidas();
  }

  eliminarCarrito(posicion) {
    if (this.comidasAgregadas[posicion]['cantidad'] < 2) {
      this.comidasAgregadas.splice(posicion, 1);
    } else {
      this.comidasAgregadas[posicion]['cantidad']--;
    }
    this.totalComidas();
  }

  buscarProductro(comida) {
    let posicion = null;
    this.comidasAgregadas.forEach((item, index) => {
      if (item['id'] === comida['id']) {
        posicion = index;
      }
    });
    return posicion;
  }

  totalComidas() {
    this.valorComidas = 0;
    this.comidasAgregadas.forEach(item => {
      this.valorComidas += (item['precio'] * item['cantidad'])
    });
  }

}
