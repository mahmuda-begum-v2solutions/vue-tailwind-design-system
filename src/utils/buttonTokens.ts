import type { BorderWidth, ButtonRadius, IconSize } from '../types/buttonTypes'

// Constants
export const baseClass =
  'flex items-center justify-center transition-all duration-200 focus:outline-none'

// Maps
export const borderWidthMap: Record<Exclude<BorderWidth, 'None'>, string> = {
  '1': 'border', // 1px border
  '2': 'border-2',
}

export const radiusClassMap: Record<ButtonRadius, string> = {
  None: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  pill: 'rounded-full',
  circle: 'rounded-full',
}

export const iconSizeMap: Record<IconSize, string> = {
  xsmall: 'w-3 h-3',
  small: 'w-4 h-4',
  default: 'w-5 h-5',
  medium: 'w-5 h-5',
  large: 'w-6 h-6',
  extralarge: 'w-7 h-7',
  mega: 'w-8 h-8',
}

export const fontSizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
}

export const fontWeightMap = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

export const lineHeightMap = {
  none: 'leading-none',
  '6': 'leading-6',
  '7': 'leading-7',
  '8': 'leading-8',
}
