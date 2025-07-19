import { TOGGLE_AUTH_USER } from "./types";

export const toggleAuthUser = (dataUser) => {
    return { type: TOGGLE_AUTH_USER, payload: dataUser };
};