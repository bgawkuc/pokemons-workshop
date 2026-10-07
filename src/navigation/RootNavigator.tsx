import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import type { RootStackParamList } from './types'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'PokeCards' }} />
    </RootStack.Navigator>
  )
}
