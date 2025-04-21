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

        if(!this.isPasswordValid(this.newPassword)){
            alert("A senha deve ter no mínimo 3 caracteres não vazios, conter pelo menos uma letra maiúscula, uma letra minúscula e um número.");
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
        } 
        else {
            alert("Usuário não encontrado!");
        }
    }


    //Function to validate password with required criteria
    isPasswordValid(password: string): boolean {
        if(!password || password.trim().length <3){
            return false;
        }

        const hasDigit = /\d/.test(password);
        const hasUpper = /[A-Z]/.test(password);

            return hasDigit && hasUpper;
        }
    }