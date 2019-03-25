import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

import { AddUser } from '../../actions/user.actions';
import { Reset } from 'src/app/state/user.state';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {

  }

  /**
   * @description this function use for create form using FormBuilder as well as we validates fields using required 
   */
  createForm(): void {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      managerId: ['', Validators.required]
    });
  }
  reset() {
    this.store.dispatch(new Reset()).subscribe(() => this.angForm.reset());
  }
  /**
   * @description
   * @param  {} name
   * @param  {} managerId
   */
  addUser(name, managerId) {
    this.store.dispatch(new AddUser({ name, managerId }));
  }

  logout() {
    this.store.reset(new Reset());
  }

  ngOnInit() {
    this.createForm();
  }


}
