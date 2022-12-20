import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'English',
};

export const languageMenuSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        clickItem: (state, actions) => {
            state.language = actions.payload;
        },
        closeItem: (state, actions) => {
            state.open = actions.payload;
        }
    }
});

export const { clickItem, closeItem } = languageMenuSlice.actions;

export default languageMenuSlice.reducer;