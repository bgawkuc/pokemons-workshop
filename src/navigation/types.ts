import type { NavigatorScreenParams } from '@react-navigation/native'

export type HomeStackParamList = {
  CardList: undefined
  CardDetails: { id: string }
}

export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>
}

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<RootTabParamList>
}
