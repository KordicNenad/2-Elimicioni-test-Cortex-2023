import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ShowData = (props) => {
    const storeData = useSelector(state => state.storeData)
    return (
        <Fragment>
            <p>{storeData}</p>
        </Fragment>
    );
};

export default ShowData;