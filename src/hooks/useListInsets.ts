import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Android's tab bar is not part of the safe area, so its height has to be padded manually.
const ANDROID_TAB_BAR_HEIGHT = 80
const LIST_PADDING = 12

/** Padding for a full-screen list that scrolls under the tab bar, with no header above it. */
export function useListInsets() {
  const insets = useSafeAreaInsets()

  // On iOS `contentInsetAdjustmentBehavior="automatic"` makes UIKit inset the list for us.
  if (Platform.OS === 'ios') {
    return { paddingTop: LIST_PADDING, paddingBottom: LIST_PADDING }
  }

  return {
    paddingTop: insets.top + LIST_PADDING,
    paddingBottom: insets.bottom + ANDROID_TAB_BAR_HEIGHT + LIST_PADDING,
  }
}
