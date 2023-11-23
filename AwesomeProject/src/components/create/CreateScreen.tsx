// LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const CreateScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'http://10.0.2.2:8000/api/auth/login',
                { email, password }
            );
            if ('authorization' in response.data) {
                const token: string = response.data.authorization.token;
                await AsyncStorage.setItem('token', token);
                console.log('Ви увійшли!');
                // @ts-ignore
                navigation.navigate('Home');
            } else if ('error' in response.data) {
                const errorMessage: string = response.data.error;
                setError(errorMessage);
            } else {
                setError('Помилка входу');
            }
        } catch (error) {
            console.error('Помилка входу:', error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button color="#233A6F" title="Вхід" onPress={handleLogin} />
            {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
            <Button
                color="#233A6F"
                title="Реєстрація"
                onPress={() => navigation.navigate('Home')}
            />

        </View>
    );
};

export default CreateScreen;