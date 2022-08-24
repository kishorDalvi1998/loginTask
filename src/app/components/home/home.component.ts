import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData:any
  data=[  {
    "Name": "Anakin",
    "Gender": "male", 
    "Homeworld": "Tatooine",
    "Born": "41.9BBY",
    "Jedi": "yes"
   },
   {
    "Name": "Amidala",
    "Gender": "female", 
    "Homeworld": "Naboo",
    "Born": "46BBY",
    "Jedi": "no"
   },
  
   {
    "Name": "R2-D2",
    "Gender": "unknown",
    "Homeworld": "Naboo",
    "Born": "33BBY",
    "Jedi": "no"
   }]
  
  constructor() { }

  ngOnInit(): void {
    this.userData = this.data
    console.log(this.userData)
  }

}
