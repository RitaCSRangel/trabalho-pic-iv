import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/service/conta/conta.service';
import { Conta } from 'src/models/conta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailUsuario: string = "";
  senhaUsuario: string = "";
  
  constructor(
    private service: ContaService,
    private router: Router
  ) { }

  usuarios: Conta[] = [];

  ngOnInit(): void {
  }

  FazerLogin (){
    this.service.ObterContaPorUsuarioESenha(this.emailUsuario, this.senhaUsuario).subscribe(users => {
      this.usuarios = users;
      this.router.navigate(['/home/lojas', {id: this.usuarios[0].conta_id}]);
    })
  }

}
