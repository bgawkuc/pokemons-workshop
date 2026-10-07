import type { NavigatorScreenParams } from '@react-navigation/native'

export type HomeStackParamList = {
  Home: undefined
}

export type SearchStackParamList = {
  Search: undefined
}

export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>
  SearchTab: NavigatorScreenParams<SearchStackParamList>
}

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<RootTabParamList>
}
