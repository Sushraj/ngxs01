import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: Observable<User>;

  constructor(private store: Store, private http: HttpClient) {
    this.users = this.store.select(state => state.users.users);
  }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }
}
