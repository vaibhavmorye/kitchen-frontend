import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-updater',
  templateUrl: './order-updater.component.html',
  styleUrls: ['./order-updater.component.css']
})
export class OrderUpdaterComponent implements OnInit {

  productFormGroup: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private _productService: ProductsService, private _router: Router) { }

  ngOnInit() {
    this.productFormGroup = new FormGroup({ product_name: new FormControl('', Validators.required) });
  }

  onSubmit() {
    let product ;
    product = this.productFormGroup.value; 
    console.log(product);
    this._productService.addProduct( this.productFormGroup.value).subscribe(res=>{
      this.successMessage = res.status;
      this._router.navigate(['/home']);
    },(err) => {
      this.errorMessage = err;
      console.log(err);
    })
     
  }
}
