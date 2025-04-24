import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    
    //list of all users
    users: any[] = [];
    // temporary object to store the form data
    user = {
        login: '',
        name: '',
        email: '',
        cpf:'',
        profile: '',
        license: '',
        changePassword: false, // Added property
        password: '' // Added property
    }
    // index of the user being edited, or null if adding a new user
    editUserIndex: number | null = null;

    showForm = false;

    constructor(private router: Router) { }

    //method used when the component is loaded. gets the user from local storage and assigns the list of users
    ngOnInit(): void{
        const savedUser = localStorage.getItem('users');
        if (savedUser) {
            this.users = JSON.parse(savedUser);
        }
    }

    //
    newUser() {
        this.user = {
          login: '',
          name: '',
          email: '',
          cpf:'',
          profile: '',
          license: 'ativo',
          changePassword: false,
          password: ''
        };
        this.showForm = true;
      }

    saveUser(form: NgForm){
        //Validates whether the form is filled out correctly.
        if (form.invalid) {
            alert('Preencha todos os campos obrigatórios: LOGIN,NOME, PERFIL e LICENÇA');
            return;
          }

        this.user['changePassword'] = true;
        

        if(this.editUserIndex !== null){
            // Keep the old password when editing the user
            const oldPassword = this.users[this.editUserIndex].password;
            const oldChangePassword = this.users[this.editUserIndex].changePassword;

            // Update existing user
            this.users[this.editUserIndex] = { 
                ...this.user,
                password: oldPassword, // Keep the old password
                changePassword: oldChangePassword // Keep the old changePassword value
             };
            this.editUserIndex = null; // Reset edit index
        }
        else{
            this.user['password'] = '123456'; // Default password for new users
            this.users.push({ ...this.user }); // Add new user
        }
        //Updates localStorage and closes the form.
        localStorage.setItem('users', JSON.stringify(this.users));
        alert('Usuário salvo com sucesso!');
        this.cancel();
    }

    //Cancels editing or creation.
    cancel(){
        this.showForm = false;
        this.editUserIndex = null; // Reset edit index
    }
   
    //Loads the data of the selected user into the form for editing.
    editUser(index: number) {
        this.editUserIndex = index;
        this.user = { ...this.users[index] }; // clone user data
        this.showForm = true;
    }

    deleteUser(index: number){
        const confirmation = confirm('Tem certeza que deseja excluir este usuário?');
        if(confirmation) {
        // Remove the user from the array
        this.users.splice(index, 1);
        // Update localStorage
        localStorage.setItem('users', JSON.stringify(this.users));
        }
        
    }

    //Redirects to the login screen.
    logout() { 
        this.router.navigate(['/login']);
    }

}
