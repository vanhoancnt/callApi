import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addProductRequest,getItemProductRequest} from './../../actions/index';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_index: '',
            product_id: '',
            product_name: '',
            product_price: 0,
            product_status: false
        }
    }

    componentDidMount() {
        var { match } = this.props;
        console.log(match);
        if (match) {
            var id = match.params.id;
            console.log(id);
            this.props.onGetItemProduct(id);
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        var { history } = this.props;
        var id = this.state.product_index;
        console.log(id);
        var product ={
            id:this.state.product_id,
            name: this.state.product_name,
            price: this.state.product_price,
            status: this.state.product_status
        }
        if (id !== "") {
            callApi(`products/${id}`, 'PUT', {
                id: this.state.product_id,
                name: this.state.product_name,
                price: this.state.product_price,
                status: this.state.product_status
            }).then(res => {
                console.log(res);
                history.goBack();
            });
        } else {
            this.props.onAddProduct(product);
            history.goBack();
        }

    }
    render() {
        var { product_name, product_id, product_price, product_status } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Tên sản phẩm</label>
                        <input type="text" className="form-control" name="product_name" required="required" value={product_name} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Mã sản phẩm</label>
                        <input type="text" className="form-control" name="product_id" required="required" value={product_id} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Giá sản phẩm</label>
                        <input type="number" className="form-control" name="product_price" required="required" value={product_price} onChange={this.onChange} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" checked={product_status ? "checked" : ""} value={product_status} name="product_status" onChange={this.onChange} />
                            Còn hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-warning">Trở lại</Link> &nbsp;
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        editProduct: state.productEdit
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(addProductRequest(product));
        },
        onGetItemProduct:(id)=>{
            dispatch(getItemProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);
