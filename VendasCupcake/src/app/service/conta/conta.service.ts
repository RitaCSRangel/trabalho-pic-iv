import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Conta } from 'src/models/conta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly endpoint = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  ObterContaPorUsuarioESenha(email: string, senha: string): Observable<Conta[]> {
    let parametro = new HttpParams()
    .set('conta_email', email)
    .set('conta_senha', senha);
    return this.http.get<Conta[]>(`${this.endpoint}/conta`, {params: parametro});
  }

  ObterContaPorId(id: string): Observable<Conta[]> {
    let parametro = new HttpParams().set('conta_id', id);
    return this.http.get<Conta[]>(`${this.endpoint}/conta`, {params: parametro});
  }

  ListarLojas(): Observable<Conta[]>{
    return this.http.get<Conta[]>(`${this.endpoint}/conta`);
  }

  /*
  Um Observable pode ser acessado em várias partes da aplicação, basta se inscrever (.subscribe) quando for chamar o método. Além disso, ele observa o objeto
  e notifica a aplicação sempre que alguma mudnaça acontecer, o que permite uma nova execução do método para obter as alterações.
  */
}
