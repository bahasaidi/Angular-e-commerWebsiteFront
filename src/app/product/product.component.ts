import { Component, OnInit } from '@angular/core';
import {Product} from "../core/modele/product";

@Component({
  selector: 'app-product', //nista3moulh bech nadoulo f  app.componrnt.htm (general)
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title :string ="welcome";
  message! :string;
  listProduct!:Product[];
  priceMax!:number;
  constructor() { }

  ngOnInit(): void {
    this.listProduct=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
    ]
  }
  buy(i:number) {
    this.listProduct[i].quantity-- ;
    this.message="BOUGHT";
  }
  like(i:number) {
    this.listProduct[i].like++ ;
    this.message="LIKED";

  }



}
