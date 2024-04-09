import {TOGGLE_VISIBLE_PROFILE} from "./types";

const initialState = {
    firstName: "firsName",
    lastName: "lastName",
    isVisibleProfile: true,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBLE_PROFILE:
            console.log(state);
            return { ...state, isVisibleProfile: !state.isVisibleProfile };
        default: return state;
    }
}