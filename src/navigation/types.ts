import type { NavigatorScreenParams } from '@react-navigation/native'

export type HomeStackParamList = {
  Home: undefined
}

export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>
}

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<RootTabParamList>
}
