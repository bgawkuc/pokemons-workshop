import type { NavigatorScreenParams } from '@react-navigation/native'

export type HomeStackParamList = {
  CardList: undefined
  CardDetails: { id: string }
}

export type ScannerStackParamList = {
  Scanner: undefined
  CardDetails: { id: string }
}

export type DiscoverStackParamList = {
  Discover: undefined
}

export type CollectionStackParamList = {
  Collection: undefined
  CardDetails: { id: string }
}

export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>
  ScannerTab: NavigatorScreenParams<ScannerStackParamList>
  DiscoverTab: NavigatorScreenParams<DiscoverStackParamList>
  CollectionTab: NavigatorScreenParams<CollectionStackParamList>
}

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<RootTabParamList>
}
