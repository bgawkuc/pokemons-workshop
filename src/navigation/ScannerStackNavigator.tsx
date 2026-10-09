import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CardDetailsScreen from '../screens/CardDetailsScreen'
import ScannerScreen from '../screens/ScannerScreen'
import type { ScannerStackParamList } from './types'

const ScannerStack = createNativeStackNavigator<ScannerStackParamList>()

export default function ScannerStackNavigator() {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ headerShown: false }}
      />
      <ScannerStack.Screen
        name="CardDetails"
        component={CardDetailsScreen}
        options={{ title: 'Card details' }}
      />
    </ScannerStack.Navigator>
  )
}
