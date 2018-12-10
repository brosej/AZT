import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-product-modal',
  templateUrl: './new-product-modal.component.html',
  styleUrls: ['./new-product-modal.component.css']
})
export class NewProductModalComponent implements OnInit {

  productFormGroup:FormGroup
  departments = ['Videogames', 'Smartphones', 'Electronics']

  constructor(public activeModal: NgbActiveModal, public pservice: ProductService, public fb: FormBuilder) { }

  ngOnInit() {

    this.productFormGroup = this.fb.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      department: new FormControl(this.departments[0], [Validators.required])
    });
    console.log(this.productFormGroup.value.name)
  }


  addProduct(product){
    console.log('this the product', product)
    this.pservice.addProduct(product)
     .subscribe( res =>{ console.log('response', res) 
     this.activeModal.close({ product:product, success:true })
   }, err => this.activeModal.close({success:false}))
  }

}
