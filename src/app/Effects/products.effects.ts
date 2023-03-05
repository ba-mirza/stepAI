import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductsService} from "../products.service";
import {LOAD_PRODUCTS} from "../constants/constants";
import {catchError, EMPTY, exhaustMap, map} from "rxjs";

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_PRODUCTS),
    exhaustMap(() => {
      return this.productService.getProducts()
        .pipe(
          map(p => ({type: `${LOAD_PRODUCTS} Successfully!`, payload: p})),
          catchError(() => EMPTY)
        )
    })
  ))

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {
  }
}
