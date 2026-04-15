import '@/global.css';
import { Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView as RnSafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'react-native-css';

//只有使用这种定义方式，才能使用native wind的css效果
const SafeAreaView = styled(RnSafeAreaView);
// rnfe
const App = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background">
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
        </SafeAreaView>
    );
};

export default App;
