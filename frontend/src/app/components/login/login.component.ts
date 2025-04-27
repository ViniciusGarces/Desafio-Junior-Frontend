import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { profile } from 'node:console';

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

  constructor(private router: Router) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Checks if there are no users in local storage and creates a default user if necessary
    if(users.length === 0){
      const userDefault = {
        login: 'admin',
        name:'Admin',
        email:'admin@gmail.com',
        cpf:'12345678900',
        profile: 'Administrador',
        license: 'Login Based',
        changePassword: false,
        password: 'Admin123',
      }
      // Adds the default user to local storage
      users.push(userDefault);
      localStorage.setItem('users', JSON.stringify(users));
      
    }
  }
  

  login() {
    //Checks if the user has selected the login date
    if(!this.loginDate) {
      alert("Selecione a data de login!");
      return;
    }

  
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const loginAccess = JSON.parse(localStorage.getItem('loginAccess') || '{}');
  
    // Search for a user with the same username and password as those entered
    const foundUser = users.find((u: any) => u.login === this.user && u.password === this.password);

    if (!foundUser) {
      alert('Usuário ou senha inválidos!');
      return;
    }

    //redirects to the change password screen if this is the first time you access it
    if (foundUser.changePassword) {
      this.router.navigate(['/changePassword'], { state: { login: foundUser.login } });
      return;
    } 

    //checks if there is a record of accesses for the date for the login-based license type. If there is none, it creates an empty array.
    if(foundUser.license == 'Login Based'){
      if(!loginAccess[this.loginDate]){
        loginAccess[this.loginDate] = [];

    }

    const loginToday = loginAccess[this.loginDate];
    const loginUnique = new Set(loginToday);

    // Sets the maximum number of licenses available per day
    const maxLicenses = 5;

    //access record. If the access limit is reached, it does not allow access. Otherwise, it allows access and adds it to the array.
    if(!loginUnique.has(this.user)){
      if(loginUnique.size >= maxLicenses){
        alert("Limite de licenças atingido para o dia");
        return;
      }
      else{
        loginToday.push(this.user);
        loginAccess[this.loginDate] = loginToday;
        localStorage.setItem('loginAccess', JSON.stringify(loginAccess));
      }
    }
  }
  this.router.navigate(['/user']);
  } 
}