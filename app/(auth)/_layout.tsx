import React from 'react';
import { Stack } from 'expo-router';

// 此处设置为true 可以单独控制这个文件夹下的内容
// const RootLayout = () => {
//     return <Stack screenOptions={{ headerShown: true }} />;
// };
// export default RootLayout;

const RootLayout = () => {
    return <Stack screenOptions={{ headerShown: false }} />;
};
export default RootLayout;
