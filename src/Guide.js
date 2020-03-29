import React from 'react';
import { Media } from 'reactstrap';
import img from './Images/img.jpg';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
const Example = (props) => {
  return (
    <div style={{ "margin": "auto", "width": "50%" }}>
    <Media>
          <Media left href="#">
      <img src={img} alt="img" />;
      </Media>
      </Media>
    <Row>
      <Col sm="4">
        <Card body>
         <h4> <CardTitle>STEP 1</CardTitle></h4>
          <CardText>Enter the value1 and value2</CardText>
          <Button color="success">Go to next step</Button>
          
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
         <h4><CardTitle>STEP 2</CardTitle></h4>
          <CardText>Choose the operator</CardText>
          <Button color="success">Get the result</Button>
        </Card>
      </Col>
     
    </Row>
    </div>
  );
}
export default Example;
