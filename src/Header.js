import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  hundlerOnchangeInput = e => {
    this.setState({ inputValue: e.target.value });
  };
  hundlerOnClickSearch = e => {
    e.preventDefault();
    this.props.callbackSearch(this.state.inputValue);
    this.setState({ inputValue: "" });
  };
  callbackHeaderRate = rate => {
    this.props.callbackHeaderRate(rate.rating);
  };
  render() {
    const { maxRate } = this.props;
    return (
      <div className="header-container m-5 d-flex flex-wrap justify-content-center ">
        <div className="search ">
          <InputGroup>
            <Input
              onChange={this.hundlerOnchangeInput}
              value={this.state.inputValue}
            />
            <InputGroupAddon addonType="append">
              <Button onClick={this.hundlerOnClickSearch}>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="pt-1 mx-2">
          <Rater total={5} rating={maxRate} onRate={this.callbackHeaderRate} />
        </div>
      </div>
    );
  }
}

export default Header;
