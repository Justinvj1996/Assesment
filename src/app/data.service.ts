import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router) {

  }


  product_details =
    [
      { sl: 1, name: "One Plus Nord", price: 30000, discount: 3000, ram: "4GB", seller: "vivo inc" },
      { sl: 2, name: "One Plus 9R", price: 39999, discount: 5000, ram: "4GB", seller: "vivo inc" },
      { sl: 3, name: "One Plus 8T", price: 38999, discount: 6000, ram: "6GB", seller: "vivo inc" },
      { sl: 4, name: "One Plus 9Pro", price: 41999, discount: 9000, ram: "8GB", seller: "vivo inc" },
      { sl: 5, name: "One Plus 7T", price: 45999, discount: 4000, ram: "2GB", seller: "vivo inc" }
    ]


  Account_details =
    [
      { uname: 1000, password: 1000 },
      { uname: 1001, password: 1001 },
      { uname: 1002, password: 1002 },
      { uname: 1003, password: 1003 },
      { uname: 1003, password: 1004 }
    ]
    datas=JSON.parse(localStorage.getItem("users"))
  cart_product = []

  login(accn: any, password: any) {
    let uname = this.datas.find(o => o.uname == accn)
    let password1 = this.datas.find(o => o.password == password)
    console.log(uname);

    if (uname && password1) {
      alert("sucess");
      this.router.navigateByUrl('home')
    }
    else {
      alert("acccount number or password invalid");
    }

  }

  register(uname: any, password: any) {
    let data = {uname: uname,password: password }
    console.log(data);
    
    this.Account_details.push(data)
    localStorage.setItem('users',JSON.stringify(this.Account_details))
    alert("Registration sucess")
    this.router.navigateByUrl('')
  }
 len=this.cart_product.length
  cart(i: any) {

    this.cart_product.push(this.product_details[i])
    localStorage.setItem('products', JSON.stringify(this.cart_product))
    
  }
routing_cart(){
  this.router.navigateByUrl('cart')
}



}
