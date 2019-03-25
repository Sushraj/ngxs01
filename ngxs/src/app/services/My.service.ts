import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  results = '';

  constructor(private http: HttpClient) { }

  // addEmployee() {
  //   return this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
  //     console.log(data);
  //   }
  //   )
  // };




}
