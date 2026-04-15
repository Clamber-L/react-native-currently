import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView as RnSafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'react-native-css';

//只有使用这种定义方式，才能使用native wind的css效果
const SafeAreaView = styled(RnSafeAreaView);

const Insights = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background">
            <Text>Insights</Text>
        </SafeAreaView>
    );
};
export default Insights;
