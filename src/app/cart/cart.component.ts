import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dataservice:DataService) { 
    //localStorage.getItem('products')
  }

datas=JSON.parse(localStorage.getItem('products'))
  ngOnInit(): void {
  }

 delete(name:any){
   this.datas.pop(name)
 }
  
 buy(name:any){
  alert("your order placed successfully" )
  this.datas.pop(name)
}
}
