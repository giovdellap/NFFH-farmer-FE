import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { GetProductsResponse, ImageResponse, LoginRequest, LoginResponse, ProductRequest, ProductResponse } from '../model/connectionModel';
import { imageResponse, mockUser, productResponse, productsResponse } from '../utils/mock';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /** SERVICE MODE
   * 1 : API (connected to server)
   * 2: Mock
   */
  serviceMode = 2;
  url = "";

  constructor(private http: HttpClient, private user: UserService) { }

  login(email: string, password: string) {
    if (this.serviceMode == 1) {
      const req: LoginRequest = {
        email: email,
        password: password
      }
      return this.http.post<LoginResponse>(this.url+'/login', req).pipe(
        tap(x => this.user.setUser(x.token, x.name))
      )
    }
    else {
      this.user.setUser(mockUser.token, mockUser.name)
      return new Observable<LoginResponse>(observer => {
        observer.next(mockUser);
        observer.complete();
      })
    }
  }

  sendImage(file: File): Observable<ImageResponse> {
    if (this.serviceMode == 1) {
      const formData = new FormData();
      formData.append("file", file, file.name);
      return this.http.post<ImageResponse>(this.url+"/image", formData)
    } else {
      return new Observable<ImageResponse>(observer => {
        observer.next(imageResponse);
        observer.complete();
      })
    }
  }

  addProduct(product: ProductRequest) {
    product.seller = this.user.getId();
    if(this.serviceMode == 1) {
      return this.http.post<ProductResponse>(this.url + "/product", product)
    } else {
      return new Observable<ProductResponse>(observer => {
        observer.next(productResponse);
        observer.complete();
      })
    }
  }

  getAllProducts() {
    if(this.serviceMode == 1) {
      return this.http.get<GetProductsResponse>(this.url + "/allproducts")
    } else {
      return new Observable<GetProductsResponse>(observer => {
        observer.next(productsResponse);
        observer.complete();
      })
    }
  }


}
