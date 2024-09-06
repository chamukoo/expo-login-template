import React from 'react';
import { View, Text, Image, Pressable, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';    
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>

            <Image source={require('../assets/images/icon.png')} style={styles.logo} />

            {/* Title of the screen */}
            <Text style={styles.title}>Welcome to Expo Login Template</Text>

            {/* Description of the screen */}
            <Text style={styles.description}>This is a template for a login screen using Expo and React Native.</Text>

            {/* Button to navigate to the Register screen */}
            <Pressable style={styles.getStartedButton} onPress={() => router.push('screens/LoginScreen/Login')}>
                <Text style={styles.getStartedButtonText}>Get Started</Text>
            </Pressable>
        </SafeAreaView>
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
    getStartedButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    getStartedButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default SplashScreen;