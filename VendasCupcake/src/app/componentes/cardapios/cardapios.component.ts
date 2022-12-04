import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardapioService } from 'src/app/service/cardapio/cardapio.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { ProdutocarrinhoService } from 'src/app/service/produtocarrinho/produtocarrinho.service';
import { Produto } from 'src/models/produto';
import { ProdutoCarrinho } from 'src/models/produtocarrinho';

@Component({
  selector: 'app-cardapios',
  templateUrl: './cardapios.component.html',
  styleUrls: ['./cardapios.component.css']
})
export class CardapiosComponent implements OnInit {

  constructor(
    private serviceCardapio: CardapioService,
    private serviceProduto: ProdutoService,
    private serviceProdutoCarrinho: ProdutocarrinhoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  cardapioId: string = ""; //Para encontrar os produtos associados ao cardápio
  produtos: Produto[] = []; //Para armazenar os produtos associados ao cardápio
  produtoCarrinho: ProdutoCarrinho[] = []; //Para armazenar os produtos adicionados ao carrinho
  totalProdutos: number = 0; //Para armazenar a quantidade de produtos adicionados ao carrinho
  totalValorProdutos: number = 0; //Para armazenar o valor total da compra a partir do preço e quantidade de produtos adicionados ao carrinho

  corBotaoAdicionar: string = "#AAB9AC";
  corBotaoDecrementar: string = "#AAB9AC";
  corBotaoProsseguirCompra: string = "#808080";

  ngOnInit(): void {

    //Snapshot é como uma foto, uma imagem da rota no ato do evento com as informações que a rota contém.
    const idLoja = this.route.snapshot.paramMap.get('id'); //Obtendo o parâmetro que foi enviado lá do componente de loja.

    //Buscando um cardápio com o id dessa loja associado
    this.serviceCardapio.obterCardapio(idLoja!).subscribe((menu) => {
      menu.forEach( (e) => {
        this.cardapioId = e.cardapio_id; //Armazenando o id do cardápio
      })

      //Usando esse id para achar os produtos
      this.serviceProduto.ObterProdutosDoCardapio(this.cardapioId).subscribe((products) => {
        console.log(products);
        this.produtos = products;
      })

    });

  }

  IncrementarProdutosDoCarrinho(produto: Produto) {

    const idProduto = produto.produto_id; //id do produto que recebeu o click
    console.log(idProduto);

    let index = 0;
    let encontrouProduto = false;

    this.produtoCarrinho.forEach(function (prod) {
      if (prod.prodcarrinho_produtoid == idProduto){
        encontrouProduto = true; //Se encontrou para aqui
      }else{
        if (encontrouProduto == false){
          index++; //Se não encontrou continua procurando
        }
      }
    })

    //Se encontrou então incrementa a quantidade dele
    if (encontrouProduto){
      if (this.produtoCarrinho[index].prodcarrinho_produtoquantidade == produto.produto_quantidade) { //Se bateu o valor máximo não incrementa
        this.corBotaoAdicionar = 'gray';
      } 
      else { //Se não bateu o valor máximo ainda pode incrementar
        this.corBotaoAdicionar = "#AAB9AC";
        this.produtoCarrinho[index].prodcarrinho_produtoquantidade++;
        console.log(this.produtoCarrinho[index].prodcarrinho_produtoquantidade);
      }
    }

    //Se o produto nunca foi encontrado no array então adiciona ele
    if (encontrouProduto == false){
      var id = Math.floor(Math.random()*90000) + 10000; 
      const novoProduto = {
        prodcarrinho_id: '#' + id,
        prodcarrinho_carrinho: '#00001',
        prodcarrinho_produtoid: idProduto,
        prodcarrinho_produtonome: produto.produto_nome,
        prodcarrinho_produtopreco: produto.produto_preco,
        prodcarrinho_produtoquantidade: 1
      }

      this.produtoCarrinho.push(novoProduto);
      console.log(novoProduto.prodcarrinho_produtoquantidade);
    }

    this.AtualizarTotalDeItens();

  }

  DecrementarProdutosDoCarrinho(produto: Produto) {
    const idProduto = produto.produto_id; //id do produto que recebeu o click
    console.log(idProduto);

    let index = 0;
    let encontrouProduto = false;

    this.produtoCarrinho.forEach(function (prod) {
      if (prod.prodcarrinho_produtoid == idProduto){
        encontrouProduto = true; //Se encontrou para aqui
      }else{
        if (encontrouProduto == false){
          index++; //Se não encontrou continua procurando
        }
      }
    })

    //Se encontrou então decrementa a quantidade dele
    if (encontrouProduto){
      if (this.produtoCarrinho[index].prodcarrinho_produtoquantidade == 0) { //Se bateu o valor mínimo não incrementa
        this.corBotaoAdicionar = 'gray';
      } 
      else { //Se não bateu o valor mínimo ainda pode decrementar
        this.corBotaoAdicionar = "#AAB9AC";
        this.produtoCarrinho[index].prodcarrinho_produtoquantidade--;
        console.log(this.produtoCarrinho[index].prodcarrinho_produtoquantidade);
      }
    }

    this.AtualizarTotalDeItens();
  }

  AtualizarTotalDeItens() {
      let contagem = 0;
      let valorTotal = 0;
      
      //Contando todos os itens que foram colocados no carrinho
      this.produtoCarrinho.forEach( (prod) => {
        contagem = contagem + prod.prodcarrinho_produtoquantidade;
        valorTotal = valorTotal + (prod.prodcarrinho_produtoquantidade * prod.prodcarrinho_produtopreco);
      })

      this.totalProdutos = contagem;
      this.totalValorProdutos = valorTotal;

      if(contagem > 0){
        this.corBotaoProsseguirCompra = "#863D3D";
      }else{
        this.corBotaoProsseguirCompra = "#808080";
      }
  }

}
