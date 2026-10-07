import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SearchScreen from '../screens/SearchScreen'
import type { SearchStackParamList } from './types'

const SearchStack = createNativeStackNavigator<SearchStackParamList>()

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
    </SearchStack.Navigator>
  )
}
