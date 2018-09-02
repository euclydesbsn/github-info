import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Repos } from '../models/repos.model';
import * as moment from 'moment';

// import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  repos: Repos;
  formValue: string;
  editForm: FormGroup;
  Object: Object;

  constructor(
    private uservice: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      username: this.fb.control("")
    });
  }

  getUser() {
    this.uservice.getUser(this.editForm.value.username).subscribe(dataUser => {
      this.user = dataUser;
      // Formatting Dates
      this.user.created_at = moment(this.user.created_at).format('YYYY-MM-DD');
      this.getRepos(this.editForm.value.username);
    }, err => {
      alert('User not found!');
    });
  }

  getRepos(username) {
    this.uservice.getRepos(username).subscribe(dataRepos => {
      this.repos = dataRepos;
    });
  }
}
