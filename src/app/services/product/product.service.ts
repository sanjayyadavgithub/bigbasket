import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }

  getProductsByCategory(id: number) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY +  id);
  }
  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT);
  }
  saveProduct(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, obj);
  }
  updateProduct(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT, obj);
  }

  deleteProduct(id: any) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + id);
  }
}
