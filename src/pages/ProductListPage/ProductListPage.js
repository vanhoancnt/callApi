import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {listProductRequest,deleteProductRequest} from './../../actions/index';
class ProductListPage extends Component {

    componentDidMount() {
        this.props.listAllProducts();
    }
    onDelete =(id)=>{
        this.props.deleteProduct(id);
    }
    render() {
        var {products} = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-warning">Thêm sản phẩm</Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete ={this.onDelete} />
                );

            });
        }
        return result;
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        listAllProducts: () => {
            dispatch(listProductRequest());
        },
        deleteProduct :(id)=>{
            dispatch(deleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
