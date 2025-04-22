import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hub_license',
  templateUrl: './hubLicense.component.html',
  styleUrls: ['./hubLicense.component.css']
})
export class HubLicenseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Aqui você pode carregar dados do localStorage ou de um serviço
    console.log('HubLicenseComponent carregado com sucesso!');
  }

}