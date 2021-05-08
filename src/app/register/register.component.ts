import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }


register(uname:any,password:any){
  console.log(uname);
  
  
  
  this.dataservice.register(uname,password)
}

}
