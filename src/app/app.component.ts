import { Component } from '@angular/core';

import { usersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  paises: any[];

  promPosts: Promise<any[]>

  constructor(
   private paisesService: usersService
  ) { 

  

   this.paises = []

   
   

   this.promPosts = this.paisesService.getusers();



  }


   
    async ngOnInit() {
      this.paises = await this.paisesService.getusers();
      console.log(this.paises);
    }

    

    
   
    
  }


