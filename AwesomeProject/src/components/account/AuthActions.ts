import {Dispatch} from "react";
import {AuthUserLoginActionType, IAuthResult, ILogin, IUser} from "./types";
import http_common from "../../http_common";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import jwt from 'jsonwebtoken';

export const LoginUserAction = async (dispatch: Dispatch<AuthUserLoginActionType>, model: ILogin) => {
    const result = await http_common.post<IAuthResult>("/api/account/login", model);
    const {token} = result.data;
    console.log("Login result", token);
    await AsyncStorage.setItem('jwtToken', token);
    //const decodedToken = jwt.decode(token);
    //console.log("User Info", decodedToken);
}