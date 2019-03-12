import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Searchcomponent extends Component {
  state = {
    Recommendation: "",
    Query: ""
  };

  findRecommendation = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v2/venues/search?near=${
          this.state.Recommendation
        }&query=${
          this.state.Query
        }&client_id=Z5YU5H0QPPTRYRIUQUPJICNIIQZDE0IKLG0XSOAJ0O3UR1WO&client_secret=VFDNJOWGNZO3IZR5JXVYVTPRFR4JJUSNSUDSGNSLBQAPMJHK&v=20180323&limit=10`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_RECOMMENDATIONS",
          payload: res.data.response.venues
        });
        this.setState({ Recommendation: "", Query: "" });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div>
              <h2> Search for Recommendations</h2>
              <form onSubmit={this.findRecommendation.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="Recommendation"
                    placeholder="Enter a Location"
                    value={this.state.Recommendation}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter a query"
                    name="Query"
                    value={this.state.Query}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <button className="btn btn-primary btn-lg">Search</button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Searchcomponent;
