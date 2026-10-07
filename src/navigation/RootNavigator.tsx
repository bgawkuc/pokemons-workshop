import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable'

import HomeStackNavigator from './HomeStackNavigator'
import SearchStackNavigator from './SearchStackNavigator'
import type { RootTabParamList } from './types'

const Tab = createNativeBottomTabNavigator<RootTabParamList>()

export default function RootNavigator() {
  return (
    // The native tab bar is a real UITabBar / BottomNavigationView, so on iOS 26 it picks up Liquid
    // Glass for free. `none` keeps it full size instead of shrinking it on scroll.
    <Tab.Navigator screenOptions={{ tabBarMinimizeBehavior: 'none' }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{ title: 'Home', tabBarIcon: { type: 'sfSymbol', name: 'house' } }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStackNavigator}
        options={{ title: 'Search', tabBarIcon: { type: 'sfSymbol', name: 'magnifyingglass' } }}
      />
    </Tab.Navigator>
  )
}
