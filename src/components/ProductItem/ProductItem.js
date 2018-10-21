import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProductItem extends Component {
    onDelete =(id)=>{
        if(confirm('Bạn chắc chắn muốn xóa ?')){//eslint-disable-line
            console.log(id);
            this.props.onDelete(id);
        }
    }
    render() {
        var {product,index}=this.props;
        var statusName = product.status ? 'Còn hàng':'Hết hàng';
        var statusClass =product.status?'success':'warning';
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.index}/edit`} className="btn btn-warning">Sửa</Link> &nbsp;
                    <button type="button" className="btn btn-danger" onClick={()=>{this.onDelete(product.index)}}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
