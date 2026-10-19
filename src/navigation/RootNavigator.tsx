import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable'
import type { NativeBottomTabIcon } from '@react-navigation/bottom-tabs/unstable'
import type { SFSymbol } from 'sf-symbols-typescript'
import { Platform } from 'react-native'
import type { ImageSourcePropType } from 'react-native'

import houseIcon from '../assets/tabs/house.png'
import HomeStackNavigator from './HomeStackNavigator'
import type { RootTabParamList } from './types'

const Tab = createNativeBottomTabNavigator<RootTabParamList>()

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarMinimizeBehavior: 'none',
        tabBarLabelVisibilityMode: 'labeled',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: tabIcon('house', houseIcon),
        }}
      />
    </Tab.Navigator>
  )
}

// SF Symbols ship with iOS only, so Android needs a bundled PNG instead
function tabIcon(name: SFSymbol, source: ImageSourcePropType): NativeBottomTabIcon {
  return Platform.OS === 'ios' ? { type: 'sfSymbol', name } : { type: 'image', source }
}
