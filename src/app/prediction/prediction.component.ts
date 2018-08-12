import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 7
import { ProductsService } from '../shared/services/products.service'
import { IProduct } from '../model/product';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  predictionFormGroup: FormGroup;
  errorMessage: string;
  successMessage: string;
  products: IProduct[];

  constructor(private _productService: ProductsService) {
    this.products = [
      {
        product_id: 1,
        product_name: 'Rice',
        raw_material: 'Rice',
        insert_date: ''
      },
      {
        product_id: 2,
        product_name: 'Mutton kebab',
        raw_material: 'Mutton',
        insert_date: ''
      },
      {
        product_id: 1,
        product_name: 'Mutton tandori',
        raw_material: 'Mutton',
        insert_date: ''
      }
    ]
  }

  ngOnInit() {
    this.predictionFormGroup = new FormGroup({
      product_input: new FormControl('', Validators.required),
      productId: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let product;
    product = this.predictionFormGroup.value;
    console.log(product);
  }
}
