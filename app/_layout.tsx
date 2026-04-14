import { Stack } from 'expo-router';

// layout 控制整个文件夹下的配置内容
const RootLayout = () => {
    return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
