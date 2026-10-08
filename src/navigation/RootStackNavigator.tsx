import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RootNavigator from './RootNavigator'
import type { RootStackParamList } from './types'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Tabs" component={RootNavigator} />
    </RootStack.Navigator>
  )
}
