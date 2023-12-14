import {AuthActions, AuthActionType, IAuthReducer} from "./types";

const init: IAuthReducer = {
    user: null,
    isAuth: false
}

export const AuthReducer = (state= init, action: AuthActions):IAuthReducer => {
    switch (action.type) {
        case AuthActionType.AUTH_USER_LOGIN || AuthActionType.AUTH_USER_REGISTER: {
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        }
        case AuthActionType.AUTH_USER_LOGOUT: {
            return {
                ...state,
                user: null,
                isAuth: false
            }
        }
    }
    return state;
}