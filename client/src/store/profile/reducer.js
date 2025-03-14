import { TOGGLE_AUTH_USER } from "./types";

const initialState = {
    isAuth: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_AUTH_USER:
            return {...state, isAuth: !state.isAuth};
        default:
            return state;
    }
}