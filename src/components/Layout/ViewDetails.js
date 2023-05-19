import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ViewDetals.css";
import ProductViewContainer from "./ProductViewContainer";
import { dataActions } from "../../store/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";




const ViewDetails = (props) => {
  const dispatch = useDispatch();
  const dataId = useSelector((state) => state.data.viewDataId);
  const itemData = useSelector((state) =>
    state.data.storeData.find((item) => item.id === dataId)
  );

  if (!itemData) {
    return <p>Loading...</p>;
  }

  const {
    thumbnail,
    title,
    brand,
    category,
    price,
    discountPercentage,
    description,
    rating,
    stock,
    images,
  } = itemData;

  const handleDelete = () => {
    dispatch(dataActions.deleteData({ itemId: dataId }));
    dispatch(dataActions.setIsViewData());
  };

  const handleEdit = () => {
    dispatch(dataActions.setIsEdit());
  };

  const handleClose = () => {
    dispatch(dataActions.setIsViewData());
  };

  return (
    <div className="overlay">

      <div
        className="back"
        onClick={handleClose}
      >
        <div>
          <FontAwesomeIcon className="Icon" icon={faArrowLeft} />
        </div>
      </div>

      <ProductViewContainer>
        <div className="row c-gap between">
          <div className="row c-gap">
            <img src={thumbnail} alt="" className="pthumbnail" />
            <div className="col">
              <h1 className="ptitle">{title}</h1>
              <h2 className="pbrand">{brand}</h2>
              <h3 className="prating">{rating}</h3>
              <h2 className="pprice">{`${price}€`}</h2>
              <div className="pstock">{`In stock: ${stock}`}</div>
            </div>
          </div>
        </div>
        <div className={"row evenly pimage-container"}>
          {images.map((image, index) => (
            <img key={index} src={image} className="pimage" />
          ))}
        </div>
        <div className="col r-gap">
          <h3 className="">Description:</h3>
          <div className="pdescription">{description}</div>
        </div>
        <div style={{ width: "auto" }} className="row c-gap end bottom">
          <div className="lenght">
            <button className="editButton" type="button" onClick={handleEdit}>
              Edit
            </button>
          </div>

          <div className="lenght">
            <button
              className="deleteButton"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </ProductViewContainer>
    </div>
  );
};

export default ViewDetails;
