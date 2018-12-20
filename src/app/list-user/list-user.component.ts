import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  }

  editUser(user: User): void {
    const userCopy = Object.assign({},user);
    this.selectedUser = userCopy;
  }

  addUser(): void {
    this.selectedUser = new User();
  }

  onResetForm(){
     this.selectedUser = null;
  } 

}
