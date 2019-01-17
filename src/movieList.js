import React, { Component } from "react";
import MovieCard from "./movieCard.js";
import AddMovieCard from "./addVideoCard.js";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getRate = (rate, i) => {
    this.props.getCardRate(rate, i);
  };
  getVideo = obj => {
    this.props.callbackApp(obj);
  };
  render() {
    const { list } = this.props;

    return (
      <div className="movieList-container mx-5 d-flex flex-wrap justify-content-center">
        {list.map((el, index) => (
          <MovieCard
            key={index}
            el={el}
            rate={(rate, i) => this.getRate(rate, i)}
          />
        ))}
        <AddMovieCard callbackMovieList={obj => this.getVideo(obj)} />
      </div>
    );
  }
}

export default MovieList;
