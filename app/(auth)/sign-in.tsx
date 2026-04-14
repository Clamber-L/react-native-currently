import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const SignIn = () => {
    return (
        <SafeAreaView>
            <Text>SignIn</Text>
            <Link href="/sign-up" className="mt-4 bg-primary rounded p-4 text-white">
                Go to Sign up
            </Link>
        </SafeAreaView>
    );
};
export default SignIn;
