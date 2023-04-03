import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentElement: null,
    modalContent: null,
}
export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        setCurrentElement : (state, action) => {
            state.currentElement = action.payload.currentElement;
        },
        setModalContent : (state, action) => {
            state.modalContent = action.payload.modalContent;
        },
    },
});

export const {setCurrentElement, setModalContent} = modalSlice.actions
