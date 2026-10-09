import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CardDetailsScreen from '../screens/CardDetailsScreen'
import CardListScreen from '../screens/CardListScreen'
import type { HomeStackParamList } from './types'
import { Text, View } from 'react-native'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="CardList"
        component={CardListScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="CardDetails"
        component={CardDetailsScreen}
        options={{ title: 'Card details' }}
      />
    </HomeStack.Navigator>
  )
}
