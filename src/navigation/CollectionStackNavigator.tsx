import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CardDetailsScreen from '../screens/CardDetailsScreen'
import CollectionScreen from '../screens/CollectionScreen'
import type { CollectionStackParamList } from './types'

const CollectionStack = createNativeStackNavigator<CollectionStackParamList>()

export default function CollectionStackNavigator() {
  return (
    <CollectionStack.Navigator>
      <CollectionStack.Screen
        name="Collection"
        component={CollectionScreen}
        options={{ title: 'My collection' }}
      />
      <CollectionStack.Screen
        name="CardDetails"
        component={CardDetailsScreen}
        options={{ title: 'Card details' }}
      />
    </CollectionStack.Navigator>
  )
}
