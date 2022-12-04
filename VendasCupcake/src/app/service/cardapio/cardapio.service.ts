import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardapio } from 'src/models/cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private readonly endpoint = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
 
  obterCardapio(idDaConta: string): Observable<Cardapio[]> {
    let parametro = new HttpParams().set('cardapio_conta', idDaConta);
    return this.http.get<Cardapio[]>(`${this.endpoint}/cardapio`, {params: parametro});
  }

}
