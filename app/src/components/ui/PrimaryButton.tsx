import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors } from '../../constants/colors';

type Variant = 'primary' | 'dark' | 'secondary' | 'danger' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  fullWidth = true,
  style,
  textStyle,
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          color={variant === 'secondary' || variant === 'outline' ? Colors.primaryBlue : Colors.white}
          size="small"
        />
      ) : (
        <Text
          style={[
            styles.text,
            styles[`text_${variant}`],
            styles[`textSize_${size}`],
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  // Variants
  primary: {
    backgroundColor: Colors.primaryBlue,
  },
  dark: {
    backgroundColor: Colors.primaryNavy,
  },
  secondary: {
    backgroundColor: '#F3F4F6',
  },
  danger: {
    backgroundColor: Colors.errorRed,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.primaryBlue,
  },
  disabled: {
    opacity: 0.5,
  },
  // Sizes
  size_sm: { height: 36, paddingHorizontal: 16 },
  size_md: { height: 44, paddingHorizontal: 24 },
  size_lg: { height: 52, paddingHorizontal: 32 },
  // Text
  text: {
    fontWeight: '600',
  },
  text_primary: { color: Colors.white },
  text_dark: { color: Colors.white },
  text_secondary: { color: Colors.textPrimary },
  text_danger: { color: Colors.white },
  text_outline: { color: Colors.primaryBlue },
  // Text sizes
  textSize_sm: { fontSize: 13 },
  textSize_md: { fontSize: 15 },
  textSize_lg: { fontSize: 16 },
});
