import * as types from '../actions/actionTypes';

const productReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case types.LOADED_PRODUCT:
          // if (action && action.product) {
            return action.product;
          // }
          // return state;

        default:
          return state;
    }
};

  export { productReducer as product };
