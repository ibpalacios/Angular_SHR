import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-order-regist',
  templateUrl: './order-regist.component.html',
  styleUrls: ['./order-regist.component.css']
})
export class OrderRegistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveOrder(form: NgForm){

  }
}
