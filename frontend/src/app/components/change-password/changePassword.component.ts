import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-change-password',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './changePassword.component.html',
    styleUrls: ['./changePassword.component.css']
})

export class ChangePasswordComponent {
    newPassword: string = '';
    confirmPassword: string = '';
    login: string = '';

    constructor(private router: Router) {
        const state = history.state;
        this.login = state.login;

        if(!this.login) {
            alert("Usuário ou senhas inválidas!")
            this.router.navigate(['/login']);
        }   
    }

    changePassword(){
        if(this.newPassword !== this.confirmPassword) {
            alert("Senhas divergentes!");
            return;
        }

       const users = JSON.parse(localStorage.getItem('users') || '[]');
       const user = users.find((user: { login: string; }) => user.login === this.login);  
       
       if (user) {
            user.password = this.newPassword;
            user.changePassword = false;

            localStorage.setItem('users', JSON.stringify(users));
            alert("Senha alterada com sucesso!");

            this.router.navigate(['/login']);
        } else {
            alert("Usuário não encontrado!");
        }
    }
} 