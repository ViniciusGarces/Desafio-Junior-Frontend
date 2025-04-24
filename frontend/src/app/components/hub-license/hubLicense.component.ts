import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-hub-license',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hubLicense.component.html',
  styleUrls: ['./hubLicense.component.css']
})
export class HubLicenseComponent {
  //list of all licenses
  licenses: any[] = [];

  // temporary object to store the form data
  user = {
    name: '',
    status: '',
  }

  // temporary object to store the license data
  license = {
    name: '',
    status: '',
  }

  // index of the user being edited, or null if adding a new user
  editLicenseIndex: number | null = null;

  showForm = false;

  constructor(private router: Router) { }

  //method used when the component is loaded. gets the license from local storage and assigns the list of licenses
  ngOnInit(): void {
    const savedLicense = localStorage.getItem('licenses');
    if (savedLicense) {
      this.licenses = JSON.parse(savedLicense);
    }
  }

  newLicense() {
    this.user = {
      name: '',
      status: ''
    };
    this.showForm = true;
  }

  saveLicense(form: NgForm) {
    //Validates whether the form is filled out correctly.
    if (form.invalid) {
      alert('Preencha todos os campos obrigatórios: NOME e STATUS');
      return;
    }

    if (this.editLicenseIndex !== null) {
      this.licenses[this.editLicenseIndex] = { ...this.license };
    } else {
      this.licenses.push({ ...this.license });
    }

    localStorage.setItem('licenses', JSON.stringify(this.licenses));

    this.license = { name: '', status: '' };
    this.editLicenseIndex = null;
    this.showForm = false;

  }

  //Cancels editing or creation.
  cancel() {
    this.showForm = false;
    this.editLicenseIndex = null; // Reset edit index
  }

  //Loads the data of the selected user into the form for editing.
  editLicense(index: number) {
    this.editLicenseIndex = index;
    this.license = { ...this.licenses[index] }; // clone user data
    this.showForm = true;
  }

  deleteLicense(index: number) {
    const confirmation = confirm('Tem certeza que deseja excluir este tipo de licença?');
    if (confirmation) {
      // Remove the user from the array
      this.licenses.splice(index, 1);
      // Update localStorage
      localStorage.setItem('licenses', JSON.stringify(this.licenses));
    }

  }

  //Redirects to the login screen.
  logout() {
    this.router.navigate(['/login']);
  }
}
