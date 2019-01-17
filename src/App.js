import React, { Component } from "react";
import MovieList from "./movieList.js";
import Header from "./Header.js";
import "./App.css";
const list = [
  {
    id: 0,
    img:
      "https://justfood.nawa3em.com//userfiles/image/0koskosy%20tunisian.jpg",
    title: "Couscous",
    rating: 5
  },
  {
    id: 1,
    img:
      "https://modo3.com/thumbs/fit630x300/51334/1435144381/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%B9%D8%AC%D9%8A%D9%86%D8%A9_%D8%A7%D9%84%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7_%D8%A7%D9%84%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A9.jpg",
    title: " Pizza",
    rating: 3
  },
  {
    id: 2,
    img: "https://i.fatafeat.com/storage/recipes/140313090451780.jpg",
    title: "Lasagna",
    rating: 2
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mvlist: list, newlist: list, serachList: list, obj: {} };
  }
  getMaxRate = () => {
    let li = this.state.mvlist;
    let max = 0;
    for (let i of li) {
      if (i.rating > max) {
        max = i.rating;
      }
    }
    return max;
  };
  getCardRate = (x, i) => {
    let list = this.state.mvlist;
    let newlist = list.map((el, index) => {
      if (index === i) {
        el.rating = x;
      }
      return el;
    });
    this.setState({ newlist: newlist });
  };
  getNewVideo = obj => {
    /* let list = this.state.newlist;
    console.log(list.length);
    let lastId = list[list.length].id;*/
    let arr = Object.values(obj);
    let modifiedObj = {
      id: 10,
      img: arr[1].url.toString(),
      title: arr[2].title.toString(),
      rating: 0
    };
    console.log(Object.values(obj));
    console.log(arr[1].url.toString());
    console.log(arr[2].title.toString());
    let newlistVideo = this.state.newlist.concat(modifiedObj);
    console.log(newlistVideo);
    this.setState({ newlist: newlistVideo, searchList: newlistVideo });
  };
  getSearchVal = searchVal => {
    let list = this.state.newlist;
    let searchList = this.state.serachList;
    console.log(searchVal.toLowerCase());
    if (searchVal !== "") {
      this.setState({
        newlist: list.filter(
          (el, index) =>
            el.title.toLowerCase().indexOf(searchVal.toLowerCase()) > -1
        )
      });
    } else {
      this.setState({ newlist: searchList });
    }
  };
  getRateFromHeader = rate => {
    let list = this.state.newlist;
    let searchList = this.state.serachList;
    if (rate) {
      this.setState({
        newlist: list.filter((el, index) => el.rating === rate)
      });
    } else {
      this.setState({ newlist: list });
    }
  };

  render() {
    const maxRate = this.getMaxRate();
    return (
      <div className="App">
        <Header
          callbackSearch={searchVal => this.getSearchVal(searchVal)}
          maxRate={maxRate}
          callbackHeaderRate={rate => this.getRateFromHeader(rate)}
        />
        <MovieList
          list={this.state.newlist}
          getCardRate={(x, i) => this.getCardRate(x, i)}
          callbackApp={obj => this.getNewVideo(obj)}
        />
      </div>
    );
  }
}

export default App;
