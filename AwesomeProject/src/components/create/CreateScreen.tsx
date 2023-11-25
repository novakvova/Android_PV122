// LoginScreen.tsx
import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from "react-hook-form";


const CreateScreen = () => {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    })
    const onSubmit = (data) => console.log(data)

    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post(
    //             'http://10.0.2.2:8000/api/auth/login',
    //             {email, password}
    //         );
    //         if ('authorization' in response.data) {
    //             const token: string = response.data.authorization.token;
    //             await AsyncStorage.setItem('token', token);
    //             console.log('Ви увійшли!');
    //             // @ts-ignore
    //             navigation.navigate('Home');
    //         } else if ('error' in response.data) {
    //             const errorMessage: string = response.data.error;
    //             setError(errorMessage);
    //         } else {
    //             setError('Помилка входу');
    //         }
    //     } catch (error) {
    //         console.error('Помилка входу:', error);
    //     }
    // };

    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        placeholder="First name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
            />
            {errors.firstName && <Text style={{color: 'red'}}>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        placeholder="Last name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastName"
            />

            <Button title="Create" onPress={handleSubmit(onSubmit)}/>
            <Button
                color="#233A6F"
                title="Реєстрація"
                onPress={() => navigation.navigate('Home')}
            />

        </View>
    );
};

export default CreateScreen;