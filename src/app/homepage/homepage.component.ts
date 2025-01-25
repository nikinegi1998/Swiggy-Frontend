import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-homepage',
  imports: [ImageModule ,DrawerModule, ButtonModule, InputTextModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  visibleLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showLoginDialog() {
    this.visibleLogin = true;
  }

  redirectTo(route:string){

  }
}
