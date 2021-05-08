import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataservice:DataService) { }

data=this.dataservice.product_details
clicked='i'
cart(i:any){
  this.dataservice.cart(i)
 
 
}

counter=0
count(){
  this.counter++
}
len=this.dataservice.len
cart_route(){
this.dataservice.routing_cart()
}

  ngOnInit(): void {
  }

}
