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
  comidasRestaurante: Array<object> = [];

  constructor(private _formBuilder: FormBuilder, private restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.configForm();
    this.obtenerListaPlatos();
  }

  configForm() {
    this.formTranslator = this._formBuilder.group({
      telefono: '',
      direccion: '',
      email: '',
      plato: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
      codigo: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    });
    this.formTranslator.get('codigo').disable();
  }

  enviarFormulario() {
    if (this.formTranslator.valid) {
      console.log("El formulario ", this.formTranslator.value);
    } else {
      console.log("FOrmulario invalid ", this.formTranslator.valid)
    }
  }

  obtenerListaPlatos() {
    this.restauranteService.obtenerPlatos().subscribe((respuesta: Array<object>) => {
      if (respuesta['success']) {
        this.comidasRestaurante = respuesta['mensaje'];
      }
    }, error => {
      console.log("Error ", error);
    });
  }

  respuestaMostrar(evento) {
    this.formTranslator.get('codigo').setValue(evento);
  }

}
