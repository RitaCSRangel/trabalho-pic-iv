import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogoEntreComponentesService {

  constructor() { }

  usuarioLogado: string = "";

  GetUsuarioLogado(): any {
    return this.usuarioLogado;
  }
  SetUsuarioLogado(val: string) {
    this.usuarioLogado = val;
  }
  
}
