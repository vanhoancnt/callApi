import {combineReducers} from 'redux';
import products from './products';
import productEdit from './productEdit';
const appReducers = combineReducers({
    products,
    productEdit
});

export default appReducers;