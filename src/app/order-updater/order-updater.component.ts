import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';7
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-order-updater',
  templateUrl: './order-updater.component.html',
  styleUrls: ['./order-updater.component.css']
})
export class OrderUpdaterComponent implements OnInit {

  productFormGroup: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.productFormGroup = new FormGroup({ productName: new FormControl('', Validators.required) });
  }

  onSubmit() {
    let product ;
    product = this.productFormGroup.value; 
    console.log(product);
     
  }
}
