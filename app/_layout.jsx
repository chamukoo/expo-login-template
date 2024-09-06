import {Stack} from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} /> 
            <Stack.Screen name="screens/LoginScreen/Login" options={{ headerShown: false }} />
            <Stack.Screen name="screens/RegisterScreen/Register" options={{ headerShown: false }} />
        </Stack>
    );
}