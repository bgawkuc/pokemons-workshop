import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ANDROID_TAB_BAR_HEIGHT = 80
const LIST_PADDING = 16

export function useListInsets() {
  const insets = useSafeAreaInsets()

  if (Platform.OS === 'ios') {
    return { paddingTop: LIST_PADDING, paddingBottom: LIST_PADDING }
  }

  return {
    paddingTop: insets.top + LIST_PADDING,
    paddingBottom: insets.bottom + ANDROID_TAB_BAR_HEIGHT + LIST_PADDING,
  }
}
