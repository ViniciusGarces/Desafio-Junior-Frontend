import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  loginDate: string = '';

  constructor(private router: Router) {}

  login() {

    if(!this.loginDate) {
      alert("Selecione a data de login!");
      return;
    }


    console.log('Usuário:', this.user);  // Verifique se o valor de 'user' está correto
    console.log('Senha:', this.password);  // Verifique se o valor de 'password' está correto
  
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log('Usuários:', users); // Verifique o conteúdo de 'users' no console

    const loginAccess = JSON.parse(localStorage.getItem('loginAccess') || '{}');
  
    const foundUser = users.find((u: any) => u.login === this.user && u.password === this.password);
    console.log('Usuário encontrado:', foundUser);  // Verifique o usuário encontrado

    if (!foundUser) {
      alert('Usuário ou senha inválidos!');
      return;
    }

    if (foundUser.changePassword) {
      this.router.navigate(['/changePassword'], { state: { login: foundUser.login } });
      return;
    } 
    if(foundUser.license == 'Login Based'){
      if(!loginAccess[this.loginDate]){
        loginAccess[this.loginDate] = [];

    }

    const loginToday = loginAccess[this.loginDate];
    const loginUnique = new Set(loginToday);

    // Sets the maximum number of licenses available per day
    const maxLicenses = 5;

    if(!loginUnique.has(this.user)){
      if(loginUnique.size > maxLicenses){
        alert("Limite de licenças atingido para o dia");
        return;
      }
      else{
        loginToday.push(this.user);
        loginAccess[this.loginDate] = loginToday;
        localStorage.setItem('loginAcess', JSON.stringify(loginAccess));
      }
    }
  }
  this.router.navigate(['/user']);
  } 
}