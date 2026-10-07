import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import type { HomeStackParamList } from './types'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'PokeCards' }} />
    </HomeStack.Navigator>
  )
}
