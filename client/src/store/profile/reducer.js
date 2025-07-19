import { TOGGLE_AUTH_USER } from "./types";

const initialState = {
    isAuth: false,
};



export const profileReducer = async (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_AUTH_USER:
            let response = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers: {
                    'Content-type': 'application/json'
                }
            
            })
            let result = await response.json();
            console.log(result);
            console.log(state.isAuth);
            return state;
        default:
            return state;
    }
}