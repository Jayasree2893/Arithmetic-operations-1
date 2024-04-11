import React from "react";
import { Button } from "reactstrap";
import { Form, FormGroup } from "reactstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "",
      secondValue: "",
      finalValue: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  add = () => {
    this.setState({
      finalValue:
        parseInt(this.state.firstValue) + parseInt(this.state.secondValue),
    });
  };
  sub = () => {
    this.setState({
      finalValue:
        parseInt(this.state.firstValue) - parseInt(this.state.secondValue),
    });
  };
  mul = () => {
    this.setState({
      finalValue:
        parseInt(this.state.firstValue) * parseInt(this.state.secondValue),
    });
  };

  div = () => {
    this.setState({
      finalValue:
        parseInt(this.state.firstValue) / parseInt(this.state.secondValue),
    });
  };
  reset = () => {
    this.setState({
      firstValue: "",
      secondValue: "",
      finalValue: "",
    });
  };

  render() {
    return (
      <div style={{ margin: "auto", width: "50%" }}>
        <Form>
          <FormGroup>
            <input
              name="firstValue"
              placeholder="value1"
              type="text"
              value={this.state.firstValue}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <input
              name="secondValue"
              placeholder="value2"
              type="text"
              value={this.state.secondValue}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Button color="primary" size="sm" onClick={this.add}>
              ADD
            </Button>{" "}
            <Button color="primary" size="sm" onClick={this.sub}>
              SUB
            </Button>{" "}
            <Button color="primary" size="sm" onClick={this.mul}>
              MUL
            </Button>{" "}
            <Button color="primary" size="sm" onClick={this.div}>
              DIV
            </Button>
          </FormGroup>

          <FormGroup>
            <input
              name="finalValue"
              type="text"
              value={this.state.finalValue}
            />
          </FormGroup>

          <Button color="danger" size="sm" onClick={this.reset}>
            CLEAR
          </Button>
        </Form>
      </div>
    );
  }
}
export default Home;
