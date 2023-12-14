// LoginScreen.tsx
import React, {useEffect, useState} from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity, Animated, Image, Button
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from "react-hook-form";
import {useTheme} from "../../../contexts/ThemeContext";
import DocumentPicker from 'react-native-document-picker';
import ScrollView = Animated.ScrollView;
import {IAuthResult, ILogin} from "../types";
import {useDispatch} from "react-redux";
import http_common from "../../../http_common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LoginUserAction} from "../AuthActions";
// import {CreateCategoryAction} from "../CategoryActions";


const LoginScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {colors} = useTheme();

    const form_styles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            flex: 1
        },
        tinyLogo: {
            height: 100,
            width: 100,
            borderRadius: 30,

        },
        logo: {
            width: 66,
            height: 58,
        },
        contentContainer: {
            height: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: colors.containerBackground,
            width: '100%',
            padding: 30,
            paddingBottom: 60,
            gap: 30,
            marginBottom: 0

        },
        logoContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            padding: 50
        },
        loginText: {
            color: colors.mainText,
            fontSize: 26,
            fontWeight: 'bold',
            fontFamily: 'Avenir'

        },
        input: {
            fontWeight: '400',
            fontFamily: 'Avenir',
            color: colors.mainText,
            borderColor: colors.primary,
            borderWidth: 2,
            borderRadius: 15,
            padding: 10,
            fontSize: 16
        },
        label: {
            color: colors.label,
            fontSize: 16,
            marginBottom: 5,
            fontWeight: '500',
            fontFamily: 'Avenir'
        },
        loginBtn: {
            backgroundColor: colors.primary,
            width: '100%',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            padding: 15,

        },
        loginBtnText: {
            color: '#DEDEDE',
            fontWeight: 'bold',
            fontSize: 16
        },
        rememberBlock: {
            alignItems: 'center',
            marginTop: 15
        },
        forgotText: {
            color: colors.primary,
            fontWeight: 'bold',
            fontSize: 14
        }
    });
   

    useEffect(() => {
        // Load the JWT token from AsyncStorage when the component mounts
        //loadToken();
    }, []);

    const loadToken = async () => {
        try {
            // Load the JWT token from AsyncStorage
            const storedToken = await AsyncStorage.getItem('jwtToken');
            if (storedToken !== null) {
                console.log('Token loaded successfully:', storedToken);
                // You may want to set the token in your state or global state here
            }
        } catch (error) {
            console.error('Error loading token:', error);
        }
    };

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: any) => {
        try {
            const model: ILogin= {
                email: data.email,
                password: data.password
            }
            console.log("login", model);
            await LoginUserAction(dispatch, model);
            // @ts-ignore
            //navigation.navigate('Home', { shouldUpdateDatabase: true });
        }
        catch(error) {
            console.log("Server error login", error);
        }
    }

    return (
        <ScrollView style={form_styles.container}>
            <View style={form_styles.logoContainer}>
                <Image style={form_styles.tinyLogo} resizeMode={'contain'} source={require('../../../assets/logo.png')}/>
            </View>
            <View style={form_styles.contentContainer}>
                <Text style={form_styles.loginText}>Вхід</Text>
                <View style={{}}>
                    <Text style={form_styles.label}>Email</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                multiline={false}
                                style={form_styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Вкажіть пошту"
                            />
                        )}
                        name="email"
                    />
                    {errors.email && <Text style={{color: 'red'}}>Пошта є обов'язковою!</Text>}
                </View>

                <View style={{}}>
                    <Text style={form_styles.label}>Пароль</Text>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                multiline={false}
                                onBlur={onBlur}
                                style={form_styles.input}
                                secureTextEntry={true}
                                placeholder="Вкажіть пароль"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="password"
                    />
                </View>


                <View>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={form_styles.loginBtn}>
                        <Text style={form_styles.loginBtnText}>Вхід</Text>
                    </TouchableOpacity>
                    {/*@ts-ignore*/}
                    <TouchableOpacity style={form_styles.rememberBlock} onPress={() => navigation.navigate('Register')}>
                        <Text style={form_styles.forgotText}>Реєстрація</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    );
};

export default LoginScreen;