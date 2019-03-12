import React from "react";

const Singlecomponent = props => {
  const { search_item } = props;

  return (
    <div className="list-group mb-5">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{search_item.name}</h5>
      </div>
      <p className="mb-1">
        Address:
        {search_item.location.address === undefined
          ? " Address not specified"
          : ` ${search_item.location.address}, 
          ${search_item.location.city},
          ${search_item.location.postalCode}`}
      </p>
    </div>
  );
};

export default Singlecomponent;
