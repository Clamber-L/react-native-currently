import { Tabs } from 'expo-router';
import { Image, type ImageSourcePropType, Platform, View } from 'react-native';
import { BlurView } from 'expo-blur';
import clsx from 'clsx';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { tabs } from '@/constants/data';
import { components, colors } from '@/constants/theme';

const { tabBar } = components;

const TabLayout = () => {
    const insets = useSafeAreaInsets();

    const TabIcon = ({ focused, icon }: { focused: boolean; icon: ImageSourcePropType }) => {
        return (
            <View className="tabs-icon">
                <View className={clsx('tabs-pill', focused && 'tabs-active')}>
                    <Image source={icon} resizeMode="contain" className="tabs-glyph" />
                </View>
            </View>
        );
    };

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarBackground:
                    Platform.OS === 'ios'
                        ? () => (
                              <BlurView
                                  intensity={80}
                                  tint="dark"
                                  style={{
                                      position: 'absolute',
                                      inset: 0,
                                      borderRadius: tabBar.radius,
                                      overflow: 'hidden',
                                  }}
                              />
                          )
                        : undefined,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: Platform.OS === 'ios' ? 'rgba(8,17,38,0.6)' : colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
                },
                tabBarIconStyle: {
                    alignContent: 'center',
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                },
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} />,
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabLayout;
