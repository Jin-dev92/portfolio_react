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
            console.log("currentElement: " + state.currentElement)
        },
        setModalContent : (state, action) => {
            state.modalContent = action.payload.modalContent;
            console.log("modal content: " + state.modalContent)
        },
    },
});

export const {setCurrentElement, setModalContent} = modalSlice.actions
