import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hub-license',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hubLicense.component.html',
  styleUrls: ['./hubLicense.component.css']
})
export class HubLicenseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('HubLicenseComponent carregado com sucesso!');
  }
}
