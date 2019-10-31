import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Footer from "./Footer";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.getPruducts();
  }

  changeCategory = category => {
    this.setState({
      currentCategory: category.name
    });
    this.getPruducts(category.items);
  };

  getPruducts = categoryItems => {
    if (categoryItems) {
      this.setState({ products: categoryItems });
    } else {
      fetch("http://localhost:3005")
        .then(response => response.json())
        .then(data => {
          this.setState({ products: data });
        });
    }
    // console.log(categoryItems);
  };

  addToCart = product => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.productName === product.name);

    if (addedItem) {
      console.log("eklenmedi");
      addedItem.quantity += 1;
    } else {
      console.log("eklendi");
      newCart.push({
        productName: product.name,
        productPrice: product.price,
        quantity: 1,
        productImage: product.image
      });
    }

    this.setState({ cart: newCart });
    alertify.success(product.name + " eklendi. Fiyatı :" + product.price);
  };
  removeFromCart = cartItem => {
    let newCart = this.state.cart.filter(
      c => c.productName !== cartItem.productName
    );
    this.setState({ cart: newCart });
    alertify.error(cartItem.productName + " sepetten silindi");
  };

  render() {
    // const { innerWidth: width } = window;
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <div>
        <Container>
          <div>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Hoş Geldiniz</h1>
                <p className="lead">
                  {" "}
                  Sol menüde genel kategorileri tıklayarak yemek kategorilerine
                  gidebilir ve varsa alt menüden seçim yapabilirsiniz. Eklenen
                  yemekler sepete eklenir sepette gitmek için sağ üst bannerdaki
                  açılır menüye tıklayın. Açılan menüde sepete git linkine
                  tıklayarak sepetteki ürünleri silebilirsiniz.Uygulama İlk
                  Açıldığında sepet boş ise Boş Sepet yazar .
                </p>
              </Container>
            </Jumbotron>
          </div>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="12">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="12">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <ProductList
                      {...props}
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={props => (
                    <CartList
                      {...props}
                      removeFromCart={this.removeFromCart}
                      cart={this.state.cart}
                    />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </div>
    );
  }
}
