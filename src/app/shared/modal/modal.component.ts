import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  @Output() respuestaHijo: EventEmitter<string>;

  form: FormGroup;
  descripcion: string = '';
  sucripcion: Subscription;

  constructor(private _formBuilder: FormBuilder) {
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

}
