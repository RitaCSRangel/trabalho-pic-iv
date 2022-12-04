import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/service/conta/conta.service';
import { DialogoEntreComponentesService } from 'src/app/service/dialogoEntreComponentes/dialogo-entre-componentes.service';
import { Conta } from 'src/models/conta';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /*
  O construtor recebe o service da entidade conta para que possa ser usado nessa classe.
  O service em questão possui várias funções que performam gets, posts etc ao database e poderão ser chamadas por aqui.
  Esse tipo de passagem de serviço via construtor se chama Injection.
  */
  constructor(
    private service: ContaService,
    private router: Router,
    private route: ActivatedRoute, //Fornece snapshots do dado contido no database
    private dialogoComponentes: DialogoEntreComponentesService
  ) { }

  /*
  Parâmetro que vai receber os elementos obtidos do database.
  Conta é a interface (model) chamada conta.ts que guarda a referência dos campos da entidade campo
  */
  usuarios: Conta[] = [];
  idUsuarioLogado: string = "";

  ngOnInit(): void {

    //Obter o valor armazenado no service de comunicação entre componentes
    //O valor sendo obtido é o id do usuário logado vindo lá do home
    this.idUsuarioLogado = this.dialogoComponentes.GetUsuarioLogado();

    /*
    Essa chamada pode ser explicada com a analogia de um aplicativo de delivery. O produto que queremos será trazido pela função listarContas
    e o subscribe é o "botão de comprar" que confirma esse pedido. a variável "usuarios" dentro do parenteses é a variável que vai receber 
    o retorno dessa chamada e, dentro dessa arrow function, esse retorno é alocado no array de mesmo nome contido nessa classe.
    */

    this.service.ObterContaPorId(this.idUsuarioLogado!).subscribe(users => {
      this.usuarios = users;
      console.log(this.usuarios);
    })

  }

}
