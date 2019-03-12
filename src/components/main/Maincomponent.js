import React, { Component } from "react";
import { Consumer } from "../../context";
import Singlecomponent from "../main/Singlecomponent";

class Maincomponent extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { search_items } = value;
          if (search_items.length === 0) {
            return <h4>Search results not found</h4>;
          } else if (search_items === undefined) {
            return <h1>Search results not found</h1>;
          } else {
            return (
              <React.Fragment>
                <h2 className="text-center mb-5">Your search venues</h2>
                {search_items.map(item => (
                  <Singlecomponent key={item.id} search_item={item} />
                ))}
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
export default Maincomponent;
