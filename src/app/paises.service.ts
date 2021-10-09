import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string;


  constructor(
    private http: HttpClient
  ) {

    this.url = 'https://jsonplaceholder.typicode.com/users';
   }

    getPaises(): Promise<any[]> {
      return this.http.get<any[]>(this.url).toPromise();

      
    }

    
  
     

}
