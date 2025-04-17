import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
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
        license: ''
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
        };
        this.showForm = true;
      }

    cancel(){
        this.showForm = false;
    }
   

    saveUser(){
        // Add the new user to the list
        this.users.push(this.user);

        // Save to localStorage
        localStorage.setItem('users', JSON.stringify(this.users));

        alert('Usuário salvo com sucesso!');

        // Close the form and clear the fields
        this.cancel();
    }
}

