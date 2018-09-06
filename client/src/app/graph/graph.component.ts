import { Component, OnInit, Input} from '@angular/core';
import { Chart } from 'chart.js';
import { config } from './graph.config';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  private _product: any;
  retailSales: Number[] = [];
  wholesaleSales: Number[] = [];

  constructor() { }

  @Input()
  set product(product: any) {
    this._product = product;
    if (product && product.sales) {
      product.sales.forEach(month => {
        this.retailSales.push(month.retailSales);
        this.wholesaleSales.push(month.wholesaleSales);
      });
      config.data.datasets[0].data = this.retailSales;
      config.data.datasets[1].data = this.wholesaleSales;

      const ctx = document.getElementById('graph');
      const chart = new Chart(ctx, config);
    }
  }

}
