import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

  users  = [{id: 0, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
            {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
            {id: 2, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
            {id: 3, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'}
           ];

  getUsers() {
    return this.users;
    //return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    this.users.splice(0, 0, user);
    /*
    return this.http.post(this.baseUrl, user);
    */
  }

  updateUser(user: User) {
   // return this.http.put(this.baseUrl + '/' + user.id, user);
    const idx = this.users.findIndex( v => v.id == user.id);
    if(idx != -1){
      this.users[idx] = user;
      alert("utente aggiornato correttamente!");
    } else{
      alert("non è stato trovato nessun riferimento all'utente");
    }
  }

  deleteUser(user: User) {
    // return this.http.delete(this.baseUrl + '/' + id);
    const index = this.users.indexOf(user);
    if(index>=0){
      this.users.splice(index, 1);
    } else {
      alert("non è stato trovato nessun riferimento all'utente");
    }
  }
}
