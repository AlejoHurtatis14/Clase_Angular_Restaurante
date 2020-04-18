import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { RestauranteService } from 'src/app/servicios/servicios-restaurante-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  formTranslator: FormGroup;
  listaComidasPedido:Array<object> = [];

  constructor(private _formBuilder: FormBuilder, private restauranteService: RestauranteService) {
    this.listaComidasPedido = this.restauranteService.pedidoComidas([], true);
  }

  ngOnInit(): void {
    this.configForm();
  }

  configForm() {
    this.formTranslator = this._formBuilder.group({
      telefono: '',
      nombrePersona: '',
      direccion: '',
      email: '',
      codigo: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    });
  }

  enviarFormulario() {
    if (this.formTranslator.valid) {
      console.log("El formulario ", this.formTranslator.value);
    } else {
      console.log("FOrmulario invalid ", this.formTranslator.valid)
    }
  }

  respuestaMostrar(evento) {
    this.formTranslator.get('codigo').setValue(evento);
  }

}
