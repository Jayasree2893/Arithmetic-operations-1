import React from "react";
import { Jumbotron, Button, Media } from "reactstrap";
import imm from "./Images/imm.jpg";

const About = (props) => {
  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <Jumbotron>
        <Media>
          <Media left href="#">
            <img src={imm} alt="imm" />;
          </Media>
        </Media>
        <h1 className="display-5">ARITHMETIC OPERATIONS</h1>
        <p className="lead">
          Arithmetic operators take numerical values (either literals or
          variables) as their operands and return a single numerical value.The
          basic arithmetic are addition, subtraction, multiplication, and
          division.
        </p>
        <hr className="my-2" />
        <p>
          The addition operator produces the sum of numeric operands .The
          subtraction operator subtracts the two operands, producing their
          difference. The multiplication operator produces the product of the
          operands.The division operator produces the quotient of its operands
          where the left operand is the dividend and the right operand is the
          divisor.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default About;
