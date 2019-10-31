import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  state = {
    categories: [],
    data: []
  };

  getCategories = () => {
    fetch("http://localhost:3005")
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data });
      });
  };
  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {
            this.props.currentCategory ? null : <ListGroup>
            {this.state.categories.map(category => (
              <ListGroupItem
                active={
                  category.name === this.props.currentCategory ? true : false
                }
                onClick={() => this.props.changeCategory(category)}
                key={category.name}
              >
                <img
                  src={require(`${category.image}`)}
                  width="200px"
                  alt={category.name}
                ></img>
                <br />
                {category.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        }
        

        
        {/*   <h3>{this.props.currentCategory}</h3> */}
      </div>
    );
  }
}
