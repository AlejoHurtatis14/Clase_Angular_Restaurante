import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'murcielago'
})
export class MurcielagoPipe implements PipeTransform {

  transform(value: string = ''): string {
    const murcielago = 'murcielago';
    let respuesta = '';
    for (let v = 0; v < value.length; v++) {
      const leng = respuesta.length;
      for (let m = 0; m < murcielago.length; m++) {
        if (value[v].toLowerCase() === murcielago[m].toLowerCase()) {
          respuesta += m;
          break;
        }
      }
      if (leng === respuesta.length) {
        respuesta += value[v].toLowerCase();
      }
    }
    return respuesta;
  }

}
