import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeData: [],
  storeDataLength: 0,
  isDeleteEnabled: false,
  isAddEnabled: false,
  availableIds: 40,
  shouldIncreseLoadNum: false,
  loadNum: 9,
  isViewData: false,
  viewDataId: 0,
  isEditOn: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    dataInsert(state, action) {
      state.storeData = action.payload.products;
      state.storeDataLength = action.payload.products.length;
    },
    handleDeleteChange(state) {
      state.isDeleteEnabled = !state.isDeleteEnabled;
    },
    handleAddChange(state) {
      state.isAddEnabled = !state.isAddEnabled;
    },
    deleteData(state, action) {
      const itemId = action.payload.itemId;
      state.storeData = state.storeData.filter((item) => item.id !== itemId);
      state.storeDataLength = state.storeData.length;
    },
    addData(state, action) {
      const newItem = {
        id: state.availableIds,
        thumbnail: action.payload.thumbnail, // Updated to use payload thumbnail
        images: action.payload.images, // Added images property
        ...action.payload.newItem,
      };
      state.storeData = [...state.storeData, newItem];
      state.storeDataLength = state.storeData.length;
      state.availableIds++;
      console.log(state.storeData);
    },
    increse(state) {
      state.loadNum = state.loadNum + 9;
    },
    setViewId(state, action) {
      state.viewDataId = action.payload.viewId;
      console.log(action.payload);
    },
    setIsViewData(state) {
      state.isViewData = !state.isViewData;
    },
    setIsEdit(state) {
      state.isEditOn = !state.isEditOn;
    },
    updateData(state, action) {
      const { itemId, thumbnail, images, Idata } = action.payload;

      state.storeData = state.storeData.map((item) => {
        if (item.id === itemId) {
          return {
            id: itemId,
            thumbnail: thumbnail,
            images: images,
            ...Idata,
          };
        }
        return item;
      });
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
