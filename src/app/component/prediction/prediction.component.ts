import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 7
import { ProductsService } from '../../shared/services/products.service'
import { IProduct } from '../../model/product';
import { Router } from '@angular/router';

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

  constructor(private _productService: ProductsService, private _router: Router) {
    this._productService.getAllFoodName().subscribe(data => { this.products =<any> data }, (err) => {
      this.errorMessage = err;
      console.log(err);
    });
  }

  ngOnInit() {
    this.predictionFormGroup = new FormGroup({
      predicted_qty: new FormControl('', Validators.required),
      productId: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this._productService.addPrediction(this.predictionFormGroup.value).subscribe(res => {
      this.successMessage = JSON.parse(JSON.stringify(res)).status;
      this._router.navigate(['/home'])
    }, (err) => {
      this.errorMessage = err;
      console.log(err);
    })
  }
}
