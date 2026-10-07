import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable'
import type { NativeBottomTabIcon } from '@react-navigation/bottom-tabs/unstable'
import type { SFSymbol } from 'sf-symbols-typescript'
import { Platform } from 'react-native'
import type { ImageSourcePropType } from 'react-native'

import homeIcon from '../../assets/tabs/home.png'
import searchIcon from '../../assets/tabs/search.png'
import HomeStackNavigator from './HomeStackNavigator'
import SearchStackNavigator from './SearchStackNavigator'
import type { RootTabParamList } from './types'

const Tab = createNativeBottomTabNavigator<RootTabParamList>()

export default function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarMinimizeBehavior: 'none' }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: tabIcon('house', homeIcon),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStackNavigator}
        options={{
          title: 'Search',
          tabBarIcon: tabIcon('magnifyingglass', searchIcon),
        }}
      />
    </Tab.Navigator>
  )
}

function tabIcon(name: SFSymbol, source: ImageSourcePropType): NativeBottomTabIcon {
  return Platform.OS === 'ios' ? { type: 'sfSymbol', name } : { type: 'image', source }
}
