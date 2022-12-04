import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/service/conta/conta.service';
import { DialogoEntreComponentesService } from 'src/app/service/dialogoEntreComponentes/dialogo-entre-componentes.service';
import { Conta } from 'src/models/conta';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {

  constructor(
    private service: ContaService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogoComponentes: DialogoEntreComponentesService
  ) { }

  lojas: Conta[] = [];
  corAberto: string = "#AAB9AC";
  corFechado: string = "#a0545e";
  idUsuarioLogado: string = "";

  ngOnInit(): void {

    //Quem recebe a informação do login (por ser a página pai que é chamada no navigator) é a lojas, então é ela quem consegue ver o snapshot dos parâmetros
    this.idUsuarioLogado = this.route.snapshot.paramMap.get('id')!;
    console.log(this.idUsuarioLogado)

    //Usando o service de dialogo entre componentes para pegar esse valor e, posteriormente, recuperá-lo em outro ts
    this.dialogoComponentes.SetUsuarioLogado(this.idUsuarioLogado);

    this.service.ListarLojas().subscribe((stores) => {
      this.lojas = stores;
    })

  }

  VerCardapio(loja: Conta) {
    //Passando o id de qual foi a loja selecionada como parâmetro
    this.router.navigate(['/home/cardapio', { id: loja.conta_id }]);
  }
}
