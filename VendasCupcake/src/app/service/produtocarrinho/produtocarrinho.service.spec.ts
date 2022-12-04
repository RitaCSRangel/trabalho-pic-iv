import { TestBed } from '@angular/core/testing';

import { ProdutocarrinhoService } from './produtocarrinho.service';

describe('ProdutocarrinhoService', () => {
  let service: ProdutocarrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutocarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
