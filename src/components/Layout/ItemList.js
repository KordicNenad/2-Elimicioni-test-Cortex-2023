import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataActions } from '../../store/data';

import Classes from "./ItemList.module.css"

import Items from './Items';

const ItemList = (props) => {
  const storeLoadNum = useSelector(state => state.data.loadNum);
  const storeData = useSelector(state => state.data.storeData);
  const dispatch = useDispatch();
  
  const [loadNum, setLoadNum] = useState(storeLoadNum);

  useEffect(() => {
    setLoadNum(storeLoadNum);
  }, [storeLoadNum]);

  if (!storeData || storeData.length === 0) {
    return null;
  }

  const firstNineItems = storeData.slice(0, loadNum);
  

  return (
    <Fragment>
      <div>
        {firstNineItems.map((data) => (
          <Items
            image={data.thumbnail}
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            brand={data.brand}

            gallery={data.images}
            category={data.Category}
            stock={data.Stock}
            rating={data.Rating}
            discountPercentage={data.discountPercentage}
            description={data.description}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ItemList;
