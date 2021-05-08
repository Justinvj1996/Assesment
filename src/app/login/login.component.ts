import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  


  login(uname:any,password:any){
    this.dataservice.login(uname,password)
  }
  ngOnInit(): void {
  }

}
