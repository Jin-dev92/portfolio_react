import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { IModelSliceState } from "../interface/modal/model-slice-state.interface.ts";

const initialState: IModelSliceState = {
  currentElement: null,
  modalContent: null,
};
export const modalSlice = createSlice({
  name: SLICE_IDENTIFIER.MODEL_SLICE.toString(),
  initialState: initialState,
  reducers: {
    setCurrentElement: (
      state,
      action: PayloadAction<{ currentElement: React.ReactElement }>,
    ) => {
      state.currentElement = action.payload.currentElement;
    },
    setModalContent: (
      state,
      action: PayloadAction<{ modalContent: React.ReactElement }>,
    ) => {
      state.modalContent = action.payload.modalContent;
    },
  },
});

// export const { setCurrentElement, setModalContent } = modalSlice.actions;
export const ModalSliceActions = modalSlice.actions;
