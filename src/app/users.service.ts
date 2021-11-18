import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class usersService {

  url: string;


  constructor(
    private http: HttpClient
  ) {

    this.url = 'https://jsonplaceholder.typicode.com/users';
   }

    getusers(): Promise<any[]> {
      return this.http.get<any[]>(this.url).toPromise();

      
    }

    
  
     

}
