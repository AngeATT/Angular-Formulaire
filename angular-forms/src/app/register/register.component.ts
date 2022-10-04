import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user : User = new User(); // création d'un nouvel objet user
  public  checkBoxPub: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  public getData(ngForm : NgForm) : void{
    //console.log("Valeurs :", JSON.stringify(ngForm.value));
    
    
    console.log("Donner enregistrer");
  }
}
