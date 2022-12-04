import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly endpoint = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  ObterProdutosDoCardapio(id: string): Observable<Produto[]> {
    let parametro = new HttpParams().set('produto_cardapio', id);
    return this.http.get<Produto[]>(`${this.endpoint}/produto`, {params: parametro});
  }
  
}
