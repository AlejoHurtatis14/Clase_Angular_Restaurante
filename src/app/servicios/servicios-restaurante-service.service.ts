import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private httpClient: HttpClient) { }

  getAllEats() {
    return [];
  }

  obtenerPlatos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': '',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
        'Access-Control-Allow-Methods': 'GET',
        'Allow': 'GET',
      })
    };
    return this.httpClient.get('/api/listaPlatos', httpOptions);
  }

}
