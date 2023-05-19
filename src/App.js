import { useDispatch } from "react-redux";
import { dataActions } from "./store/data";
import Star from "./components/Layout/Buttons/Star";
import AddPopup from "./components/Layout/Add/AddPopup";
import EditDetails from "./components/Layout/EditDetails";

import "./App.css";

import ItemList from "./components/Layout/ItemList";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import DataFetcher from "./DataFetcher";

import ViewDetails from "./components/Layout/ViewDetails";

function App() {
  const dispatch = useDispatch();

  const storeLoadNum = useSelector((state) => state.data.loadNum);
  const storeDataLength = useSelector((state) => state.data.storeDataLength);
  const isView = useSelector((state) => state.data.isViewData);
  const isEdit = useSelector((state) => state.data.isEditOn);

  const handleIncreaseLoadNum = () => {
    dispatch(dataActions.increse());
  };

  return (
    <div>
      <DataFetcher />
      <AddPopup></AddPopup>

      {isEdit === true && <EditDetails></EditDetails>}

      {isView === true ? (
        <ViewDetails></ViewDetails>
      ) : (
        <div>
          <Star></Star>

          <section className="list">
            <ItemList></ItemList>
          </section>
          {storeDataLength === 0 && (
            <div className="spinner">
              <FontAwesomeIcon icon={faSpinner} spin />
            </div>
          )}
          {storeLoadNum < storeDataLength && (
            <div className="ButtonFlex">
              <button
                className="loadMoreButton"
                onClick={handleIncreaseLoadNum}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
