import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ProductActions } from './actions/productActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @select() product: any[];

  constructor(private ngRedux: NgRedux<any>, private _productActions: ProductActions) { }

  ngOnInit() {
    this.ngRedux.dispatch<any>(this._productActions.loadProduct());
  }
}
