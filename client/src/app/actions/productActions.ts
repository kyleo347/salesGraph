import { Injectable } from '@angular/core';
import * as types from './actionTypes';
import { ProductService } from '../product.service';

@Injectable()
export class ProductActions {
    constructor(private _productService: ProductService) { }

    loadedProduct(product) {
        return { type: types.LOADED_PRODUCT, product};
    }

    loadProduct() {
        return dispatch => {
            return this._productService.getProduct().subscribe(
                (product: any) => dispatch(this.loadedProduct(product))
            );
        };
    }
}
