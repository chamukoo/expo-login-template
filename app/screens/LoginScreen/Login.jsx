import React, {useState} from 'react';
import { View, Text, Image, Pressable, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const Login = () => {  
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);

        router.push('../../(tabs)');

    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/icon.png')} style={styles.logo} />
            <Text style={styles.title}>Welcome to Expo Login Template</Text>
            <Text style={styles.description}>This is a template for a login screen using Expo and React Native.</Text>

            {/* Input for username */}
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            {/* Input for password */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Button for Login */}
            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>

            <Pressable style={styles.registerButton} onPress={() => router.push('screens/RegisterScreen/Register')} >
                <Text style={styles.registerButtonText}>Don't Have An Account?</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Login;