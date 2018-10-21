import * as types from './../constants/ActionTypes';

var initState = {}

const appReducer =(state = initState, action)=>{
    switch(action.type){
        case types.ACTION_PRODUCT_GET_ITEM:
            state = action.product;
            return [...state];
        default: return [...state];
    }
}

export default appReducer;