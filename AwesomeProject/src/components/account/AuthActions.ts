import {Dispatch} from "react";
import {AuthActionType, AuthUserLoginActionType, IAuthResult, ILogin, IUser} from "./types";
import http_common from "../../http_common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode  from "jwt-decode";
export const LoginUserAction = async (dispatch: Dispatch<AuthUserLoginActionType>, model: ILogin) => {
    const result = await http_common.post<IAuthResult>("/api/account/login", model);
    const {token} = result.data;
    await AsyncStorage.setItem('jwtToken', token);
    LoginUserRedux(dispatch, token);
}

export const LoginUserRedux = (dispatch: Dispatch<AuthUserLoginActionType>, token: string) => {
    var user = jwt_decode<IUser>(token);
    dispatch({
        type: AuthActionType.AUTH_USER_LOGIN,
        payload: user
    });
}