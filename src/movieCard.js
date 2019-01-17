import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import pizza from "./img/pizza.jpeg";
class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.el.id,
      rating: this.props.el.rating
    };
  }
  rate = rate => {
    this.setState({ rating: rate.rating });
    console.log("X rating" + rate.rating);
  };
  getRate = () => {
    this.props.rate(this.state.rating, this.state.index);
  };
  render() {
    const { el } = this.props;

    return (
      <div className="card m-3">
        <Card>
          <a className="card">
            <CardImg
              top
              width="100%"
              height="150px"
              src={el.img.toString()}
              alt="Card image cap"
            />
          </a>
          <div className="mt-2">
            <Rater total={5} rating={this.state.rating} onRate={this.rate} />
          </div>

          <CardBody className="py-2">
            <CardTitle className="title p-0 my-0">{el.title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MovieCard;
