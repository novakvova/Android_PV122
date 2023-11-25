// LoginScreen.tsx
import React from 'react';
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Image,
    TouchableOpacity, Animated
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from "react-hook-form";
import {useTheme} from "../../contexts/ThemeContext";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import ScrollView = Animated.ScrollView;


const CreateScreen = () => {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const styles = StyleSheet.create({
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

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            name: "",
            description: ""
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
        // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
        <ScrollView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.tinyLogo} resizeMode={'contain'} source={require('../../assets/logo.png')}/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.loginText}>Створити категорію</Text>
                <View style={{}}>
                    <Text style={styles.label}>Назва</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                multiline={false}
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="name"
                    />
                    {errors.name && <Text style={{color: 'red'}}>Назва є обов'язковою!</Text>}
                </View>

                <View style={{}}>
                    <Text style={styles.label}>Опис</Text>
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                multiline={false}
                                onBlur={onBlur}
                                style={styles.input}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="description"
                    />
                </View>
                <View style={{marginBottom: 50}}>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Створити</Text>
                    </TouchableOpacity>
                    {/* <Button title='fdsfs' onPress={handleSubmit}></Button> */}
                    <TouchableOpacity style={styles.rememberBlock} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.forgotText}>До списку</Text>
                    </TouchableOpacity>
                </View>

                {/* <Button title='Login' style={styles.loginBtn} /> */}
            </View>

            {/*<Button title="Create" onPress={handleSubmit(onSubmit)}/>*/}
            {/*    <Button*/}
            {/*        color="#233A6F"*/}
            {/*        title="Реєстрація"*/}
            {/*        onPress={() => navigation.navigate('Home')}*/}
            {/*    />*/}
        </ScrollView>
        // </KeyboardAvoidingView>
    );
};

export default CreateScreen;