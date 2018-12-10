import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpResponse, HttpHeaders }	from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.apiUrl;

  constructor(public http: HttpClient) { }

  private reloadSource = new BehaviorSubject<boolean>(false);
  private editSource = new BehaviorSubject<boolean>(false); 
  allowEdit = this.editSource.asObservable();
  reload = this.reloadSource.asObservable();



  getProducts(page, limit) {
    return this.http.get<any>(`${this.baseUrl}/products?page=${page}&limit=${limit}`);
  }

  addProduct(product) {
    console.log('this the product from the service', product)
    return this.http.post<any>(`${this.baseUrl}/products`, product);
  }

  updateProduct(product) {
    return this.http.put<any>(`${this.baseUrl}/products`, product);
  }

  deleteProduct(productId) {
    console.log('erasing ',productId)
    return this.http.delete<any>(`${this.baseUrl}/products?deleteById=${productId}`);
  }

  allowProductEditing(value:boolean){
    this.editSource.next(value)
  }

  updateProductList(value:boolean){
    this.reloadSource.next(value)
  } 

}
