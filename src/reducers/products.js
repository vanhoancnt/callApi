import * as types from './../constants/ActionTypes';
var initState =[];


var findIndex =(products,id)=>{
    var result =-1;
    products.forEach((product,index)=>{
        if(product.index ===id){
            result = index;
        }
    });
    return result;
}


const appReducer =(state = initState,action)=>{
    var index =-1;
    switch(action.type){
        case types.ACTION_PRODUCT_LIST:
            state = action.products;
            return [...state];
        case types.ACTION_PRODUCT_DELETE:
            index = findIndex(state,action.id);
            if(index !==-1){
                state.splice(index,1);
            }
            return [...state];
        case types.ACTION_PRODUCT_ADD:
            state.push(action.product);
            return [...state];
        default :
            return [...state];
    }
}

export default appReducer;