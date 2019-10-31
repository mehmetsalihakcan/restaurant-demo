import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

export default class SubMenus extends Component {
  state = {
    visible: false
  };
  toggleMenu = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div>
        {!this.state.visible ? (
          <Button onClick={() => this.toggleMenu()} color="primary">
            Göster
          </Button>
        ) : (
          <Button onClick={() => this.toggleMenu()} color="primary">
            Kapat
          </Button>
        )}

        {this.state.visible ? (
          <ListGroup>
            {this.props.mySubMenuArray.map(menu => (
              <ListGroupItem
                onClick={() => console.log(menu + "alt menüsü tıklandı")}
                key={menu}
              >
                <br />
                {menu}
              </ListGroupItem>
            ))}
          </ListGroup>
        ) : null}
      </div>
    );
  }
}
