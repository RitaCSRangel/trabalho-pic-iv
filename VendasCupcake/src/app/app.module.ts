import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LojasComponent } from './componentes/lojas/lojas.component';
import { CardapiosComponent } from './componentes/cardapios/cardapios.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { EntrarComponent } from './componentes/paginas/entrar/entrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LojasComponent,
    CardapiosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
