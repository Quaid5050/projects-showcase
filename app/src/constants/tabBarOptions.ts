import { Platform } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBar } from './layout';

const ANDROID_BOTTOM_FALLBACK = 12;

/** Dynamic tab bar options — sits above the phone's system navigation bar */
export function useTabScreenOptions(compact = false): BottomTabNavigationOptions {
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(
    insets.bottom,
    Platform.OS === 'android' ? ANDROID_BOTTOM_FALLBACK : 0
  );

  return {
    headerShown: false,
    tabBarActiveTintColor: TabBar.activeTint,
    tabBarInactiveTintColor: TabBar.inactiveTint,
    tabBarAllowFontScaling: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      backgroundColor: TabBar.background,
      borderTopColor: TabBar.borderColor,
      borderTopWidth: 1,
      height: TabBar.contentHeight + bottomInset,
      paddingTop: TabBar.paddingTop,
      paddingBottom: bottomInset,
      elevation: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
    },
    tabBarLabelStyle: {
      fontSize: compact ? TabBar.labelSizeCompact : TabBar.labelSize,
      fontWeight: TabBar.labelWeight,
      marginTop: 1,
      marginBottom: 0,
    },
    tabBarIconStyle: {
      marginTop: 0,
    },
    tabBarItemStyle: {
      paddingVertical: 2,
    },
  };
}
