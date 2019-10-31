import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Yemek Resmi</th>
            <th>Adı</th>
            <th>Fiyat</th>
            <th>Adet</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map(cartItem => (
            <tr key={cartItem.productName + cartItem.productImage}>
              <td>
                <img
                  src={require(`${cartItem.productImage}`)}
                  width="200px"
                  alt={cartItem.name}
                ></img>
              </td>
              <td>{cartItem.productName}</td>
              <td>{cartItem.productPrice}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem)}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return (
      <div>
        <h3>Sepetteki Yemekler</h3>
        {this.renderCart()}
      </div>
    );
  }
}
