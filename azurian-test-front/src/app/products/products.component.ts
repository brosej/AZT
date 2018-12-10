import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewProductModalComponent } from '../new-product-modal/new-product-modal.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  paginationMaxSize = 10;
  paginationTotalItems = 0;
  paginationPage = 1
  paginationLimit = 10
  products = []
  shownProduct = {
    name:null,
    price:null,
    description:null,
    department:null
  }
  selected:any

  constructor(public modalService: NgbModal, public pservice: ProductService) { }
  
  ngOnInit() {
    this.getProducts(this.paginationPage, this.paginationLimit)
    this.pservice.reload.subscribe( reload=>{
      console.log('yo reloading list')
      if(reload)
      this.getProducts(this.paginationPage, this.paginationLimit)
    })
  }

  viewProduct(product){
    console.log('showing this product', product)
    this.shownProduct = product;
    this.selected = product
  }

  getProducts(page, limit){
    this.pservice.getProducts(page, limit).subscribe( data =>{
      console.log('data', data.products)
      this.products = data.products
      this.paginationTotalItems = data.total
    })
  }

  pageChanged(event: any) {
    this.paginationPage = event.page;
    this.getProducts(this.paginationPage, this.paginationLimit);
  }


  triggerAddModal(){
    const modalRef = this.modalService.open(NewProductModalComponent, {centered:true});
    modalRef.componentInstance.name = 'World';

    modalRef.result.then( data => {
      if(data.success) {
        console.info(data)
        this.getProducts(this.paginationPage, this.paginationLimit)
        console.log('Added new product', this.products)
      } else{
        console.log('There was en error adding the product')
      }
    }).catch( err => console.error(err))
  }

  

  allowEditing(){
    this.pservice.allowProductEditing(true);
  }

}
