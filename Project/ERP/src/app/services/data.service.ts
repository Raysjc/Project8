import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // create an empty user array
  users : User[] = [];

  constructor() { 
    var user = new User();
    user.userName = "Ray";
    user.password = "ratratrat";
    user.firstName = "Rhenard";
    user.lastName = "Cayabyab";

    this.users.push(user);
  }

  public saveUser(theNewUser){
    this.users.push(theNewUser);
  }

  public getAllUsers(){
    // return all the users
    return this.users;
  }
}
