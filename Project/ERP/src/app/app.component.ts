import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';

  name = "Rhenard Cayabyab";

  test(){
    console.log("Ohhh no, you clicked me!!");
    this.name = "Changed!"
    this.title = "bllooops"
  }
}
