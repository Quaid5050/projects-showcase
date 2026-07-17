import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { TAB_BAR_CONTENT_HEIGHT } from '../constants/layout';

/** Fallback when Android reports 0 inset (3-button nav on some devices) */
const ANDROID_BOTTOM_FALLBACK = 12;

/**
 * Safe-area aware spacing for tab screens, FABs, and scroll content.
 * Works across iPhone (home indicator) and Android (gesture / 3-button nav).
 */
export function useLayoutInsets() {
  const insets = useSafeAreaInsets();
  const tabBarHeightFromNav = useBottomTabBarHeight();

  const bottomInset = Math.max(
    insets.bottom,
    Platform.OS === 'android' ? ANDROID_BOTTOM_FALLBACK : 0
  );

  const tabBarHeight =
    tabBarHeightFromNav > 0 ? tabBarHeightFromNav : TAB_BAR_CONTENT_HEIGHT + bottomInset;

  return {
    insets,
    bottomInset,
    tabBarHeight,
    /** ScrollView / FlatList padding on screens with bottom tabs */
    scrollPaddingBottom: tabBarHeight + 16,
    /** FAB position above the tab bar */
    fabBottom: tabBarHeight + 12,
    /** Bottom padding for full-screen stacks (no tab bar visible) */
    screenPaddingBottom: bottomInset + 24,
  };
}
