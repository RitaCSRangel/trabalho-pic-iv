import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoCarrinho } from 'src/models/produtocarrinho';

@Injectable({
  providedIn: 'root'
})
export class ProdutocarrinhoService {

  private readonly endpoint = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  adicionarProdutoAoCarrinho(produtoCarrinho: ProdutoCarrinho): Observable<ProdutoCarrinho> {
    return this.http.post<ProdutoCarrinho>(`${this.endpoint}/produtoCarringo`, produtoCarrinho);
  }
}
