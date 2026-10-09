import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DiscoverScreen from '../screens/DiscoverScreen'
import type { DiscoverStackParamList } from './types'

const DiscoverStack = createNativeStackNavigator<DiscoverStackParamList>()

export default function DiscoverStackNavigator() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{ title: 'Discover a card' }}
      />
    </DiscoverStack.Navigator>
  )
}
