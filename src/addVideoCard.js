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
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import add from "./img/add.png";
class AddMovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      URLvideo: "",
      titleVideo: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  hundleOnChangeURL = e => {
    this.setState({ URLvideo: e.target.value });
  };
  hundleOnChangeTitle = e => {
    this.setState({ titleVideo: e.target.value });
  };
  onClickAddMovie = e => {
    let title = this.state.titleVideo;
    let url = this.state.URLvideo;
    let obj = [
      {
        id: 0,
        img: { url },
        title: { title },
        rating: 0
      }
    ];

    this.props.callbackMovieList(obj[0]);
    //reset form and close modal
    this.setState({
      modal: !this.state.modal,
      URLvideo: "",
      titleVideo: ""
    });
    ////
  };
  /**********--render()--************/
  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div className="card m-3  ">
        <a className="card" onClick={this.toggle}>
          <Card className="p-3">
            <CardImg
              center
              width="20%"
              height="150px"
              src={add}
              alt="Card image cap"
            />
          </Card>
        </a>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Add new video
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="" sm={2}>
                  Title :
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="title"
                    id=""
                    placeholder="Title"
                    onChange={this.hundleOnChangeTitle}
                    value={this.state.titleVideo}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Video URL :
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="urlVideo"
                    id=""
                    placeholder="URL video"
                    onChange={this.hundleOnChangeURL}
                    value={this.state.URLvideo}
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onClickAddMovie}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovieCard;
