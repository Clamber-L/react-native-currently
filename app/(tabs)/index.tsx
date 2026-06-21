import '@/global.css';
import { FlatList, Text, View, Image } from 'react-native';
import { SafeAreaView as RnSafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'react-native-css';
import { useState } from 'react';
import dayjs from 'dayjs';

import {
    HOME_BALANCE,
    HOME_SUBSCRIPTIONS,
    HOME_USER,
    UPCOMING_SUBSCRIPTIONS,
} from '@/constants/data';
import SubscriptionCard from '@/componments/SubscriptionCard';
import ListHeading from '@/componments/ListHeading';
import { icons } from '@/constants/icons';
import images from '@/constants/images';
import { formatCurrency } from '@/lib/untils';
import UpcomingSubscriptionCard from '@/componments/UpcomingSubscriptionCard';

//只有使用这种定义方式，才能使用native wind的css效果
const SafeAreaView = styled(RnSafeAreaView);
// rnfe
const App = () => {
    const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);

    return (
        <SafeAreaView className="flex-1 p-5 bg-background">
            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <View className="home-header">
                            <View className="home-user">
                                <Image source={images.avatar} className="home-avatar" />
                                <Text className="home-user-name">{HOME_USER.name}</Text>
                            </View>
                            <Image source={icons.add} className="home-add-icon" />
                        </View>
                        <View className="home-balance-card">
                            <Text className="home-balance-label">Balance</Text>
                            <View className="home-balance-row">
                                <Text className="home-balance-amount">
                                    {formatCurrency(HOME_BALANCE.amount)}
                                </Text>
                                <Text className="home-balance-date">
                                    {dayjs(HOME_BALANCE.nextRenewalDate).format('MM-DD')}
                                </Text>
                            </View>
                        </View>
                        <View className="mb-5">
                            <ListHeading title="Upcoming" />
                            <FlatList
                                data={UPCOMING_SUBSCRIPTIONS}
                                renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                ListEmptyComponent={
                                    <Text className="home-empty-state">
                                        No upcoming renewals yet.
                                    </Text>
                                }
                            />
                        </View>
                        <ListHeading title="All Subscriptions" />
                    </>
                )}
                data={HOME_SUBSCRIPTIONS}
                keyExtractor={(item) => item.id}
                extraData={expandedSubscriptionId}
                ItemSeparatorComponent={() => <View className="h-4" />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text className="home-empty-state">No subscriptions yet</Text>}
                renderItem={({ item }) => (
                    <SubscriptionCard
                        {...item}
                        expanded={expandedSubscriptionId === item.id}
                        onPress={() =>
                            setExpandedSubscriptionId((currentId) =>
                                currentId === item.id ? null : item.id,
                            )
                        }
                    />
                )}
                contentContainerClassName="pb-18"
            />
        </SafeAreaView>
    );
};

export default App;
