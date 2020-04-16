import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/servicios/servicios-restaurante-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  comidasRestaurante: Array<object> = [];

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.restauranteService.obtenerPlatos().subscribe((respuesta: Array<object>) => {
      if (respuesta['success']) {
        this.comidasRestaurante = respuesta['mensaje'];
      }
    });
  }

}
