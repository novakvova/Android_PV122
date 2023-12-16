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
import {IAuthResult, ILogin, IRegister} from "../types";
import {useDispatch} from "react-redux";
import http_common from "../../../http_common";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {CreateCategoryAction} from "../CategoryActions";
import RNFS from 'react-native-fs';


const RegisterScreen = () => {
    const [pickedImage, setPickedImage] = useState<string|null>(null);

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
            marginBottom: 0,
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

    const routeNames = navigation.getState().routeNames;


    const pickImage = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            if(result!=null) {
                if(result.length>0) {
                    const selectImage = result[0];
                    if(selectImage!=null) {
                        setPickedImage(selectImage.uri);
                        console.log("Select image", selectImage);
                    }
                }
            }
            // Handle the picked image, for example, set it in state
            //setPickedImage(result.uri);

        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker
                console.log('User cancelled the image picker');
            } else {
                // Handle other errors
                console.error('Error picking image:', err);
            }
        }
    };

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
            firstName: "",
            lastName: "",
            imageBase64: "",
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: any) => {
        try {
            //console.log("Resp", data);
            const base64 = await RNFS.readFile( pickedImage ? pickedImage: "", 'base64');
            //console.log("base64 = ", base64);
            const model: IRegister= {
                firstName: data.firstName,
                lastName: data.lastName,
                imageBase64: base64,
                email: data.email,
                password: data.password
            }
            console.log("Register", model);
            const result = await http_common.post<IAuthResult>("/api/account/register", model);
            const auth = result.data;
            console.log("Login result", auth.token);
            await AsyncStorage.setItem('jwtToken', auth.token);
            // @ts-ignore
            navigation.reset({
                // @ts-ignore
                routes: [{ name: 'TopNavbar' }],
            });
            //navigation.navigate('CategoryListScreen', { shouldUpdateDatabase: true });
        }
        catch(error) {
            console.log("Server error login", error);
        }
    }

    return (
        <ScrollView style={form_styles.container}>
            <View style={form_styles.contentContainer}>

                <Text style={form_styles.loginText}>Реєстрація</Text>

                <View style={{}}>
                    <Text style={form_styles.label}>Прізвище</Text>
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
                                placeholder="Вкажіть прізвище"
                            />
                        )}
                        name="lastName"
                    />
                    {errors.lastName && <Text style={{color: 'red'}}>Пошта є обов'язковою!</Text>}
                </View>

                <View style={{}}>
                    <Text style={form_styles.label}>Ім'я</Text>
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
                                placeholder="Вкажіть прізвище"
                            />
                        )}
                        name="firstName"
                    />
                    {errors.firstName && <Text style={{color: 'red'}}>Пошта є обов'язковою!</Text>}
                </View>

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

                {pickedImage && (
                    <View>
                        <Image source={{ uri: pickedImage }} style={{ width: 150, height: 150 }} />
                    </View>
                )}
                <View>

                    <TouchableOpacity onPress={pickImage} style={form_styles.loginBtn}>
                        <Text style={form_styles.loginBtnText}>Обрати фото</Text>
                    </TouchableOpacity>

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
                        <Text style={form_styles.loginBtnText}>Реєструватися</Text>
                    </TouchableOpacity>
                    {/*@ts-ignore*/}
                    <TouchableOpacity style={form_styles.rememberBlock} onPress={() => navigation.navigate('Login')}>
                        <Text style={form_styles.forgotText}>Вхід</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    );
};

export default RegisterScreen;