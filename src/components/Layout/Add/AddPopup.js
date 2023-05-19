import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store/data";
import Classes from "./AddPopup.module.css";

const AddPopup = () => {
  const isOpen = useSelector((state) => state.data.isAddEnabled);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    category: "",
    description: "",
    discountPercentage: "",
    price: "",
    rating: "",
    stock: "",
    images:
      "https://teddytennis.com/united-arab-emirates/wp-content/uploads/sites/87/2017/11/placeholder.png",
    thumbnail:
      "https://teddytennis.com/united-arab-emirates/wp-content/uploads/sites/87/2017/11/placeholder.png",
  });

  const handleClose = () => {
    dispatch(dataActions.handleAddChange());
  };

  if (!isOpen) {
    return null;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(dataActions.addData({ newItem: formData }));

    setFormData({
      title: "",
      brand: "",
      category: "",
      description: "",
      discountPercentage: "",
      price: "",
      rating: "",
      stock: "",
      images:
        "https://teddytennis.com/united-arab-emirates/wp-content/uploads/sites/87/2017/11/placeholder.png",
      thumbnail:
        "https://teddytennis.com/united-arab-emirates/wp-content/uploads/sites/87/2017/11/placeholder.png",
    });
    handleClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={Classes.popupOverlay}>
      <div className={Classes.popupContent}>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              maxLength="50"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={Classes.row}>
            <div className={Classes.leftDiv}>
              <label htmlFor="brand">Brand:</label>
              <input
                type="text"
                id="brand"
                name="brand"
                maxLength="50"
                value={formData.brand}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={Classes.rightDiv}>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                maxLength="50"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Classes.row}>
            <div className={Classes.leftDiv}>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={Classes.rightDiv}>
              <label htmlFor="discountPercentage">Discount Percentage:</label>
              <input
                type="text"
                id="discountPercentage"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={Classes.row}>
            <div className={Classes.leftDiv}>
              <label htmlFor="rating">Rating:</label>
              <input
                type="text"
                id="rating"
                name="rating"
                pattern="^(?:5(?:\.0{1,2})?|(?:[0-4](?:\.\d{1,2})?))$"
                value={formData.rating}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={Classes.rightDiv}>
              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className={Classes.description}>
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              maxLength="150"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className={Classes.buttons}>
            <button className={Classes.submitButton} type="submit">
              Submit
            </button>
            <button className={Classes.cancleButton} onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPopup;
