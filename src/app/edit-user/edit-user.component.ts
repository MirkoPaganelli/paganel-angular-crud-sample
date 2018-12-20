import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  private __user: User;
  private userCopy: User;

  @Input("user") set user (user: User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user(){
    return this.__user;
  }

  @Output("resetUser") resetUser = new EventEmitter<User>();
 
  constructor(private router: Router, private    userService: UserService) { }

  ngOnInit() {
  }
  

 salvaUser(): void {
    if(this.user.id>=0)
        this.userService.updateUser(this.user);
    else{
        this.userService.createUser(this.user);     
    }
      this.resetUser.emit(null);
  };

  resetForm(): void{
    this.user = this.userCopy;
  }
  

}
