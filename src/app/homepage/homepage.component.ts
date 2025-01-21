import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-homepage',
  imports: [ImageModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  redirectTo(route:string){

  }
}
