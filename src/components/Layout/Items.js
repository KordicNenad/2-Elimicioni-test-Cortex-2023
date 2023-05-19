import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Items.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store/data";

const Items = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDelete = useSelector((state) => state.data.isDeleteEnabled);
  const dispatch = useDispatch();


  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (isDelete === true) {
      dispatch(dataActions.deleteData({ itemId: props.id }));
    } else {
      dispatch(dataActions.setViewId({ viewId: props.id }));
      dispatch(dataActions.setIsViewData());
    }
  };

  return (
    <Card>
      <li className={classes.list} onClick={handleClick}>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={classes.overlay}
        >
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className={classes.overlay}
          >
            <div className={classes.nameBox}>
              <h2 className={classes.title}>{props.title}</h2>
              <p className={classes.brand}>{props.brand}</p>
            </div>
            <div className={classes.priceBoxBorder}>
              <i className={classes.price}>$</i>
              <h3 className={classes.price}>{props.price}</h3>
            </div>
            {!isDelete && (
              <div
                className={isHovered ? classes.gradientHover : classes.gradient}
              />
            )}
            {isDelete && (
              <div
                className={
                  isHovered ? classes.gradientHoverDelete : classes.gradient
                }
              />
            )}
            <img src={props.image} alt="landscape"></img>
          </div>
        </div>
      </li>
    </Card>
  );
};

export default Items;
