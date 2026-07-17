import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { Colors } from '../../constants/colors';

interface ScreenContainerProps {
  children: React.ReactNode;
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
}

/** Standard screen wrapper — top safe area only; bottom padding handled by scroll content */
export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  edges = ['top'],
  style,
}) => (
  <SafeAreaView style={[{ flex: 1, backgroundColor: Colors.background }, style]} edges={edges}>
    {children}
  </SafeAreaView>
);
