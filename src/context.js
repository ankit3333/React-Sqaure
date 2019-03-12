import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_RECOMMENDATIONS":
      return {
        ...state,
        search_items: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    search_items: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v2/venues/search?near=buffalo&client_id=Z5YU5H0QPPTRYRIUQUPJICNIIQZDE0IKLG0XSOAJ0O3UR1WO&client_secret=VFDNJOWGNZO3IZR5JXVYVTPRFR4JJUSNSUDSGNSLBQAPMJHK&v=20180323&limit=10&query=pizza"
      )
      .then(res => {
        this.setState({ search_items: res.data.response.venues });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
