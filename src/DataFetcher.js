import { useDispatch } from "react-redux";
import { dataActions } from "./store/data";
import { useEffect } from "react";

function DataFetcher() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => dispatch(dataActions.dataInsert(data)))
        .then((data) => console.log(data));
    }, []);
  
    return null;
  }

export default DataFetcher;  