// LoginScreen.tsx
import React, {useState} from 'react';
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
import {ICategoryCreate} from "../types";
import {useDispatch} from "react-redux";
import {CreateCategoryAction} from "../CategoryActions";


const CategoryCreateScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [pickedImage, setPickedImage] = useState<string|null>(null);

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

    const onSubmit = async (data: any) => {
        try {
            const model: ICategoryCreate = {
                image: pickedImage ? pickedImage: "",
                name: data.name,
                description: data.description
            }
            await CreateCategoryAction(dispatch, model);

            // @ts-ignore
            navigation.navigate('Home', { shouldUpdateDatabase: true });
        }
        catch(error) {
            console.log("Server error", error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.tinyLogo} resizeMode={'contain'} source={require('../../../assets/logo.png')}/>
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

                {pickedImage && (
                    <View>
                        <Image source={{ uri: pickedImage }} style={{ width: 150, height: 150 }} />
                    </View>
                )}
                <View style={{marginBottom: 25}}>

                    <TouchableOpacity onPress={pickImage} style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Обрати фото</Text>
                    </TouchableOpacity>

                </View>

                <View style={{marginBottom: 50}}>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Створити</Text>
                    </TouchableOpacity>
                    {/*@ts-ignore*/}
                    <TouchableOpacity style={styles.rememberBlock} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.forgotText}>До списку</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    );
};

export default CategoryCreateScreen;