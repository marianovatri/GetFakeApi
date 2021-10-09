import { Component } from '@angular/core';

import { PaisesService } from './paises.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //CurrencyPipe
  //los pipe se usan para modificar lo que se ve en el html sin modificar las variables
  // el pipe es " | "
  precio:number;

  //decimalpipe
  numero: number;

  //datepipe
  fechaActual: Date;

  //percentPipe
  numAleatorio: number;

  //JSONPipe
  estudiante: any;

  //lower, upper, title /case
  texto: string;

  //slicePipe
  animales: string[];
  minimo: number;
  maximo: number;

  //asyncPipe
  prom: Promise<string>;

  paises: any[];

  promPosts: Promise<any[]>

  constructor(
   private paisesService: PaisesService
  ) { 

   
    this.animales = ['perro','gato','pajaro']
    this.texto = 'en un lugar de la mancha'
    this.estudiante = {
      nombre: 'Roberto',
      apellidos: 'lopez',
      notas: [2,4,6,2]
    }
    this.numAleatorio = Math.random();
    this.precio = 198.87;
    this.numero = 3.5554542;
    

   this.paises = []

   this.minimo= 0,
   this.maximo= this.animales.length -1 ;

   this.prom = new Promise((resolve, reject) => {
     setTimeout(()=> resolve('se resuleve pasando 4 segundos'), 4000)
   });
  
   

   this.promPosts = this.paisesService.getPaises();

   this.fechaActual = new Date()

  }


   
    async ngOnInit() {
      this.paises = await this.paisesService.getPaises();
      console.log(this.paises);
    }

    

    
   
    
  }


