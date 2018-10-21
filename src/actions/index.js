import * as types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const deleteProductRequest =(id)=>{
    return (dispatch) =>{
        return callApi(`products/${id}`,'DELETE',null).then(res=>{
            dispatch(deleteProduct(id));
        });
    }
}
export const deleteProduct =(id)=>{
    return {
        type: types.ACTION_PRODUCT_DELETE,
        id
    }
}

export const editProduct =(id)=>{
    return {
        type: types.ACTION_PRODUCT_EDIT,
        id
    }
}

export const listProduct =(products)=>{
    return {
        type: types.ACTION_PRODUCT_LIST,
        products
    }
}

export const listProductRequest =()=>{
    return (dispatch)=>{
        return callApi('products','GET',null).then(res=>{
            dispatch(listProduct(res.data));
        });
    }
}

export const addProduct =(product)=>{
    return {
        type:types.ACTION_PRODUCT_ADD,
        product
    }
}

export const addProductRequest =(product)=>{
    return (dispatch)=>{
        return callApi('products','POST',product).then(res=>{
            dispatch(addProduct(product));
        });
    }
}

export const getItemProduct =(product)=>{
    return {
        type:types.ACTION_PRODUCT_GET_ITEM,
        product
    }
}

export const getItemProductRequest =(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'GET',null).then(res=>{
            dispatch(getItemProduct(res.data));
        });
    }
}