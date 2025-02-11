import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  statusMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  validateForm() {
    if (!this.user.username || !this.user.password) {
      this.statusMessage = 'Usuário e senha são obrigatórios!';
      return false;
    }
    return true;
  }

  login() {
    if (!this.validateForm()) {
      return;
    }

    this.http.post('https://localhost:7145/api/Auth/login', this.user, { responseType: 'text' })
      .subscribe(
        (response) => {
          if (response === 'Login bem-sucedido.') {
            this.router.navigate(['/success']);
          } else {
            this.statusMessage = 'Usuário ou senha inválidos.';
          }
        },
        (error) => {
          console.error('Erro na requisição:', error);
          this.statusMessage = 'Erro na comunicação com o servidor.';
        }
      );
  }

  navigateToCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
