import React, { Fragment, useState } from "react";
import Classes from "./Star.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faStar,
  faTrash,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const Star = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isDelete = useSelector((state) => state.data.isDeleteEnabled);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(dataActions.handleDeleteChange());
  };
  const handleAddClick = () => {
    dispatch(dataActions.handleAddChange());
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <Fragment>
      {isDelete ? 
      (
        <div
          className={Classes.overlayIsDelete}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={handleDeleteClick}
        >
          <div className={Classes.starHover}>
            <FontAwesomeIcon
              className={Classes.starIcon}
              icon={faXmark}
            />
          </div>
        </div>
      )
      :
      (
        <div
          className={Classes.overlay}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <div className={isHovered ? Classes.starHover : Classes.star}>
            <FontAwesomeIcon
              className={Classes.starIcon}
              icon={isHovered ? faXmark : faStar}
            />
          </div>
          {isHovered && (
            <div className={Classes.boxDelete} onClick={handleDeleteClick}>
              <FontAwesomeIcon className={Classes.icon} icon={faTrash} />
            </div>
          )}
          {isHovered && (
            <div className={Classes.boxAdd} onClick={handleAddClick}>
              <FontAwesomeIcon className={Classes.icon} icon={faSquarePlus} />
            </div>
          )}
        </div>
      )
    }

      
    </Fragment>
  );
};

export default Star;
