import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { IProductOrder } from '../../model/productOrder';
import { LiveFeedsService } from '../../shared/services/live-feeds.service';


@Component({
  selector: 'app-kitchendisplay',
  templateUrl: './kitchendisplay.component.html',
  styleUrls: ['./kitchendisplay.component.css']
})
export class KitchendisplayComponent implements OnInit {

  productOrders: IProductOrder[];
  updatedOrder: IProductOrder;

  constructor(private _productService: ProductsService,
    private _liveFeedsService: LiveFeedsService) {

  }

  ngOnInit() {
    this._productService.getOrderes().subscribe(data => { this.productOrders = data });

    this._liveFeedsService.getUpdate.subscribe(update => {
      this.updateProductOrders(update);
    })

  }

  orderComplete(product) {
    this._liveFeedsService.sendUpdate(product);
  }

  updateProductOrders(update) {
   console.log(update);
   console.log(this.productOrders);
    var newdata = JSON.parse(update).rows[0];
   //console.log(newdata);
    this.productOrders.find(item => item.product_id == newdata.product_id).completed_qty = newdata.completed_qty;

  }
}


// this.productOrders = [{
//   "order_id": 1,
//   "product_id": 1,
//   "product_name": 'Rice',
//   "predicted_qty": 10,
//   "completed_qty": 2,
//   "ordered_qty": 1
// },
// {
//   "order_id": 2,
//   "product_id": 2,
//   "product_name": 'Mutton Rice',
//   "predicted_qty": 10,
//   "completed_qty": 5,
//   "ordered_qty": 2
// },
// {
//   "order_id": 1,
//   "product_id": 1,
//   "product_name": 'Mutton tandoori',
//   "predicted_qty": 10,
//   "completed_qty": 6,
//   "ordered_qty": 4
// }]
