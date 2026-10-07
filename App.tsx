import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import RootNavigator from './src/navigation/RootNavigator'

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

// Registers App as the root component of the app and sets up the environment
// so the same code runs in Expo Go and in a native build.
registerRootComponent(App)

export default App
