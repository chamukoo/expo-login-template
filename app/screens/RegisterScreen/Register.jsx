import React, {useState} from 'react';
import { View, Text, Image, Pressable, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const Register = () => {  
    const router = useRouter();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 

    const handleLogin = () => {
        console.log('Fullname:', fullname);
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        router.push('screens/LoginScreen/Login');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/icon.png')} style={styles.logo} />
            <Text style={styles.title}>Welcome to Expo Login Template</Text>
            <Text style={styles.description}>This is a template for a login screen using Expo and React Native.</Text>

            {/* Input for fullname */}  
            <TextInput
                style={styles.input}
                placeholder="Fullname"
                value={fullname}
                onChangeText={setFullname}  
            />

            {/* Input for email */} 
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail} 
            />

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

            {/* Input for confirm password */}
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            {/* Button for Login */}
            <Pressable style={styles.registerButton} onPress={handleLogin}>
                <Text style={styles.registerButtonText}>Register</Text>
            </Pressable>

            <Pressable style={styles.loginButton} onPress={() => router.push('screens/LoginScreen/Login')} >
                <Text style={styles.luttonText}>Already Have An Account?</Text>
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
    registerButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Register;