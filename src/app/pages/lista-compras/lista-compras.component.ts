import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  @Input() comida: object;
  @Input() pos: number;
  @Output() posicionComida: EventEmitter<number>;

  constructor() {
    this.posicionComida = new EventEmitter();
  }

  ngOnInit(): void {
  }

  eliminarCarrito() {
    this.posicionComida.emit(this.pos);
  }

}
