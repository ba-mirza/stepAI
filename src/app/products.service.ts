import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Not work, cause expected other
  private readonly URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return of(null);
  }

}
