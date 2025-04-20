import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    

    users: any[] = [];
    // temporary object to store the form data
    user = {
        login: '',
        name: '',
        email: '',
        profile: '',
        license: '',
        changePassword: false, // Added property
        password: '' // Added property
    }

    showForm = false;

    constructor() { }

    ngOnInit(): void{
        const savedUser = localStorage.getItem('users');
        if (savedUser) {
            this.users = JSON.parse(savedUser);
        }
    }

    newUser() {
        this.user = {
          login: '',
          name: '',
          email: '',
          profile: '',
          license: 'ativo',
          changePassword: false,
          password: ''
        };
        this.showForm = true;
      }

    cancel(){
        this.showForm = false;
    }
   

    saveUser(){
        this.user['changePassword'] = true;
        this.user['password'] = '123456'; // ou uma senha temporária
        this.users.push({ ...this.user });

        localStorage.setItem('users', JSON.stringify(this.users));

        alert('Usuário salvo com sucesso!');
        this.cancel();
    }
}

