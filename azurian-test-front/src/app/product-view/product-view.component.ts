import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  editing:boolean = false;
  departments = ['Videogames', 'Smartphones', 'Electronics']

  @Input('product') product;
  ngOnChanges(changes:SimpleChanges) {

    this.editing = false

  }
  viewProductFormGroup:FormGroup

  details = {
    name:null,
    price:null,
    description:null,
    department:null
  }

  constructor(private fb: FormBuilder, public pservice:ProductService) { }

  ngOnInit() {
    this.pservice.allowEdit.subscribe( reload=>{
      console.log('yo')
      this.editing = reload
    })
    console.log(this.product)
  }

  updateProduct(){

    this.pservice.updateProduct(this.product).subscribe( data =>{
      console.log(data);
      this.pservice.updateProductList(true);
      this.editing = false
    }, err =>{
      console.log('there was an error')
    })
  }

  
  deleteProduct(){

    this.pservice.deleteProduct(this.product.id).subscribe( data =>{
      console.log(data);
      this.pservice.updateProductList(true);
      this.editing = false
    }, err =>{
      console.log('there was an error')
    })
  }


}
