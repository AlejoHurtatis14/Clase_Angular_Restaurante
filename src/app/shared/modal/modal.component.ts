import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MurcielagoPipe } from '../pipes/murcielago.pipe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('cerrarModal') cerrarModalsita: ElementRef;
  @Input() titulo: string;
  @Input() platos: Array<object>;
  @Output() respuestaHijo: EventEmitter<string>;

  form: FormGroup;
  descripcion: string = '';
  sucripcion: Subscription;

  constructor(private _formBuilder: FormBuilder, private render: Renderer2) {
    this.respuestaHijo = new EventEmitter();

    this.form = this._formBuilder.group({
      respuesta: '',
    });
  }

  ngOnInit(): void {
    this.sucripcion = this.form.get('respuesta').valueChanges.subscribe(respuesta => {
      this.descripcion = respuesta;
    });
  }

  resultadoModal() {
    //this.render.setProperty(this.cerrarModalsita.nativeElement, 'hide', '');
    if (this.form.get('respuesta').valid) {
      const murcielago = new MurcielagoPipe();
      this.descripcion = murcielago.transform(this.descripcion);
      this.respuestaHijo.emit(this.descripcion);
      this.cerrarModalsita.nativeElement.click();
    }
  }

  ngOnDestroy(): void {
    this.sucripcion.unsubscribe();
  }

  buscarPlato(value) {
    for (let i = 0; i < this.platos.length; i++) {
      if (this.platos[i]['id'] === +value) {
        return this.platos[i]['nombre'];
      }
    }
  }

}
