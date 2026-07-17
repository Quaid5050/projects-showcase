/** Tab bar icon + label area (excluding system bottom inset) */
export const TAB_BAR_CONTENT_HEIGHT = 56;

/** Shared spacing used across all screens */
export const Layout = {
  screenPadding: 20,
  contentPadding: 16,
  sectionGap: 24,
  cardGap: 12,
} as const;

/** Bottom tab bar styling — height is computed at runtime via useLayoutInsets */
export const TabBar = {
  activeTint: '#2563EB',
  inactiveTint: '#94A3B8',
  background: '#FFFFFF',
  borderColor: '#E2E8F0',
  contentHeight: TAB_BAR_CONTENT_HEIGHT,
  paddingTop: 6,
  iconSize: 22,
  labelSize: 10,
  labelSizeCompact: 9,
  labelWeight: '600' as const,
};
