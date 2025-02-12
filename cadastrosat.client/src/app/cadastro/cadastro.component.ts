import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class CadastroComponent {
  user = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  statusMessage: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  validateForm() {
    if (!this.user.username || !this.user.password || !this.user.confirmPassword) {
      this.statusMessage = 'Todos os campos são obrigatórios!';
      return false;
    }

    if (this.user.password !== this.user.confirmPassword) {
      this.statusMessage = 'As senhas não coincidem!';
      return false;
    }

    return true;
  }

  register() {
    if (!this.validateForm()) {
      return;
    }

    console.log('Enviando dados para o servidor: ', this.user);

    this.http.post('https://localhost:7145/api/Auth/register', this.user, { responseType: 'text' })
      .subscribe(
        (response) => {
          console.log('Resposta da API:', response);
          if (response === 'Usuário cadastrado com sucesso.') {
            this.statusMessage = 'Usuário cadastrado com sucesso!';
            this.authService.login();
            this.router.navigate(['/success']);
          }
        },
        (error) => {
          console.error('Erro na requisição:', error);

          if (error.error === 'Usuário já existe.') {
            this.statusMessage = 'Já existe um usuário com esse nome. Tente outro.';
          } else {
            this.statusMessage = 'Erro ao cadastrar. Tente novamente.';
          }
        }
      );
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
