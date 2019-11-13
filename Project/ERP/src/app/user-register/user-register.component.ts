import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  model : User = new User();
  userNameError = true;
  passwordError = true;
  passwordMatchError = false;
  requiredEmail = true;

  constructor(private data : DataService) { }

  ngOnInit() {
  }

  userValueChanged(){
    if (this.model.userName.length > 3){
      this.userNameError = false;
    } else{
      this.userNameError = true;
    }
  }

  passwordValueChanged(){
    this.passwordError = this.model.password.length < 7;

    if (this.model.password == this.model.retypePassword){
      this.passwordMatchError = false;
    } else {
      this.passwordMatchError = true;
    }
  }

  emailValue(){

    if (this.model.email.length < 5 || this.model.email.includes('@')){
      this.requiredEmail = false;
    } else {
      this.requiredEmail = true;
    }
  }

  registerUser() {
    console.log('The user wants tp save another user');
    console.log(this.model);
    var isThereAnError = false;

    if(!this.model.userName){
      this.userNameError = true;
      isThereAnError = true;
    }

    if(!this.model.password){
      this.passwordError = true;
      isThereAnError = true;
    }

    if(!this.model.email){
      this.requiredEmail = true;
      isThereAnError = true;
    }

    if (isThereAnError || this.passwordMatchError){
      return;
    }
    
    // save the user into the service
    this.data.saveUser(this.model)

    // create a new one
    // so user can register more users
    this.model = new User();
  }
}
