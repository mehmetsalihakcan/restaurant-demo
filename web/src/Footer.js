import React, { Component } from "react";
import { Card, CardFooter, CardTitle, CardBody, CardText } from "reactstrap";

export default class Footer extends Component {
  render() {
    const { innerWidth: width } = window;
    return (
      <div style={{ width: width * 1 }}>
        <Card>
          <h3>Burası footer</h3>
          <CardBody>
            <CardTitle>Restaurant Uygulaması</CardTitle>
            <CardText>Bazı Açıklamalar</CardText>
          </CardBody>
          <CardFooter className="text-muted">
            Designed By Mehmet Salih AKCAN @2019
          </CardFooter>
        </Card>
      </div>
    );
  }
}
