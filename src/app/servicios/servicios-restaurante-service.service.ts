import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  arrayComidas = [{
    id: 1,
    nombre: "Modongo",
    precio: 8800,
    estado: 1,
    imagen: "../../../assets/imagenes/01.jpg",
  }, {
    id: 2,
    nombre: "Minipaisa",
    precio: 6800,
    estado: 1,
    imagen: "../../../assets/imagenes/02.jpg",
  }, {
    id: 3,
    nombre: "Maxipaisa",
    precio: 10800,
    estado: 1,
    imagen: "../../../assets/imagenes/03.jpg",
  }, {
    id: 4,
    nombre: "Doblepaisa",
    precio: 13800,
    estado: 1,
    imagen: "../../../assets/imagenes/04.png",
  }, {
    id: 5,
    nombre: "Arroz paisa",
    precio: 8800,
    estado: 1,
    imagen: "../../../assets/imagenes/05.jpeg",
  }, {
    id: 6,
    nombre: "Bandeja paisa",
    precio: 6800,
    estado: 1,
    imagen: "../../../assets/imagenes/06.jpg",
  }, {
    id: 7,
    nombre: "Arroz Americano",
    precio: 10800,
    estado: 1,
    imagen: "../../../assets/imagenes/07.jpg",
  }, {
    nombre: "Sorpresa",
    precio: 13800,
    estado: 1,
    imagen: "../../../assets/imagenes/08.jpg",
  }];
  comidasPedido = [];

  constructor(private httpClient: HttpClient) { }

  getAllEats() {
    return [];
  }

  obtenerPlatos() {
    return this.arrayComidas;
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': '',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
        'Access-Control-Allow-Methods': 'GET',
        'Allow': 'GET',
      })
    };
    return this.httpClient.get('/api/listaPlatos', httpOptions); */
  }

  pedidoComidas(comidas: object[], retornar?) {
    if (retornar) {
      return this.comidasPedido;
    }
    this.comidasPedido = comidas;
  }

}
