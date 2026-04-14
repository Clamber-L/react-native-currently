import '@/global.css';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

// rnfe
const App = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-2xl font-bold text-blue-500">Welcome to Nativewind!</Text>

            <Link href="/onBoarding" className="mt-4 bg-primary rounded p-4 text-white">
                Go to Onboarding
            </Link>
            <Link href="/(auth)/sign-in" className="mt-4 bg-primary rounded p-4 text-white">
                Go to Sign in
            </Link>
            <Link href="/subscriptions/spotify" className="mt-4 bg-primary rounded p-4 text-white">
                Go to subscriptions
            </Link>
        </View>
    );
};

export default App;
