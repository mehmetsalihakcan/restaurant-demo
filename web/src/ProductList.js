import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import SubMenus from "./SubMenus";

export default class ProductList extends Component {
  state = {
    mySubMenuArray: []
  };

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>
         {
           this.props.currentCategory ? 
         
        <Table>
          <thead>
            <tr>
              <th>Yemek Resmi</th>
              <th>Yemek Adı</th>
              <th>Fiyatı</th>
              <th>Açıklaması</th>
              <th>Sepete ekle</th>
              <th>Alt Menüler</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.name}>
                <td>
                  <img
                    src={require(`${product.image}`)}
                    width="200px"
                    alt={product.name}
                  ></img>
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.caption}</td>
                <td>
                  
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="info"
                  >
                    Ekle
                  </Button>
                </td>
                <td>
                  
                  {product.subMenus ? (
                    <SubMenus mySubMenuArray={product.subMenus} />
                  ) : (
                    <h6>Yok</h6>
                  )}
                </td>
              </tr>
              /* alt menu varsa il elemanını göster yoksa birşey yapma*/
            ))}
          </tbody>
        </Table>
        :null
      }
      </div>
    );
  }
}
