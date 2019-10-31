import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Restaurant</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Anasayfa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/mehmetsalihakcan">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/* import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap';
export default class Navi extends Component {
    render() {
        const { innerWidth: width } = window;
        return (
            <div style={{  width:width*1 }}>
               
                <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Hoş Geldiniz</h1>
          <p className="lead"> Sol menüde genel kategorileri tıklayarak yemek kategorilerine ve varsa alt menüden seçim yapabilirsiniz.</p>
        </Container>
      </Jumbotron>
            </div>
        )
    }
}
 */
