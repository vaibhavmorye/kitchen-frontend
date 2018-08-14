import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProductOrder } from '../../model/productOrder';
import * as XLSX from 'xlsx';;


@Component({
  selector: 'app-reportgenrator',
  templateUrl: './reportgenrator.component.html',
  styleUrls: ['./reportgenrator.component.css']
})
export class ReportgenratorComponent implements OnInit {
  reportgenratorForm: FormGroup;
  report: IProductOrder[];

  constructor(private _productsService: ProductsService) {

  }

  ngOnInit() {
    this.reportgenratorForm = new FormGroup({
      from_date: new FormControl('', Validators.required),
      to_date: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    //console.log(this.reportgenratorForm.value);
    this._productsService.generateReports(this.reportgenratorForm.value)
      .subscribe(data => {
        this.report = <IProductOrder[]>data;
      });
  }

  downloadReport() {
    const workSheet = XLSX.utils.json_to_sheet(this.report);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
    XLSX.writeFile(workBook, 'temp.xlsx'); 
  }
}
