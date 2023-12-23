import * as React from 'react'
import {useSelector} from "react-redux";
import {IAuthReducer} from "../account/types";
import contactData from '../mocks/contact.json';

import Profile from './Profile'


const ProfileScreen = () => {
   const { user, isAuth } = useSelector((store: any) => store.auth as IAuthReducer);

    console.log("User auth", user);
    return (
        <Profile {...contactData} />
    )
}


export default ProfileScreen