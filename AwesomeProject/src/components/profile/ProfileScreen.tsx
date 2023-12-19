import * as React from 'react'

import {Text, View} from 'react-native'
import {useSelector} from "react-redux";
import {IAuthReducer} from "../account/types";


const ProfileScreen = () => {
   const { user, isAuth } = useSelector((store: any) => store.auth as IAuthReducer);

    console.log("User auth", user);
    return (
        <View>
            <Text>{user?.name}</Text>
        </View>
    )
}


export default ProfileScreen