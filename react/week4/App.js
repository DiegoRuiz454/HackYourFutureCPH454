import React, { Fragment, Component } from "react";

import "./App.css";
import Banner from "./banner/banner.component";
import SearchBox from "./search-box/search-box.component";
import Card from "./card/card.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      userData: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ searchName: event.target.value }, () => {
      this.getData(this.state.searchName);
    });
  };

  getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }))
      
  };

  render() {
    return (
      <Fragment>
        <Banner />
        <SearchBox onInputChange={this.onInputChange} />
        {this.state.userData.id && this.state.searchName !== "" ? (
          <Card profile={this.state.userData} />
        ) : (
          <div className="loading">
            No Results <br />
          </div>
        )}
      </Fragment>
    );
  }
}


export default App;
