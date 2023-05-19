import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductViewContainer from "./ProductViewContainer";
import Classes from "./EditDetails.module.css";
import { dataActions } from "../../store/data";

const EditDetails = (props) => {
  const dispatch = useDispatch();
  const dataId = useSelector((state) => state.data.viewDataId);
  const itemData = useSelector((state) =>
    state.data.storeData.find((item) => item.id === dataId)
  );

  const [formData, setFormData] = useState({
    title: itemData.title,
    brand: itemData.brand,
    category: itemData.category,
    price: itemData.price,
    discountPercentage: itemData.discountPercentage,
    description: itemData.description,
    rating: itemData.rating,
    stock: itemData.stock,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const updatedItem = {
      itemId: dataId,
      thumbnail: itemData.thumbnail,
      images: itemData.images,
      Idata: formData,
    };

    dispatch(dataActions.updateData(updatedItem));
    dispatch(dataActions.setIsEdit());
  };

  const handleClose = () => {
    dispatch(dataActions.setIsEdit());
  };

  return (
    <ProductViewContainer className={Classes.edit}>
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
              <button className={Classes.cancelButton} onClick={handleClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProductViewContainer>
  );
};

export default EditDetails;
