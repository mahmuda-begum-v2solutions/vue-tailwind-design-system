import type { IconName } from '../utils/getIconComponent'

// Define the type for the icon sizes (could be keys like 'xsmall', 'small', etc.)
export type IconSize = 'xsmall' | 'small' | 'default' | 'medium' | 'large' | 'extralarge' | 'mega'
export type ColorRole =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral'

export type TextColor = 'white' | 'black' | ColorRole

export type BackgroundColorType = 'solid' | 'transparent' | 'subtle' | 'subdued'
export type BorderColorType = 'transparent' | ColorRole
export type BorderWidth = 'None' | '1' | '2'
export type ButtonRadius =
  | 'None' // Square
  | 'sm' // Slightly rounded
  | 'md' // Medium (default)
  | 'lg' // Large (softer corners)
  | 'pill' // Fully rounded for pill shape
  | 'circle' // Perfect circle for icon buttons
export type TypographySize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold'
export type Leading = 'none' | '6' | '7' | '8'
export type Theme = 'light' | 'dark'

export interface ButtonProps {
  label?: string
  disabled?: boolean
  isLoading?: boolean
  role?: ColorRole
  backgroundColorType?: BackgroundColorType
  borderColorType?: BorderColorType
  borderWidth?: BorderWidth
  buttonRadius?: ButtonRadius
  textColor?: TextColor
  classes?: string
  iconSize?: IconSize
  leadingIcon?: IconName
  trailingIcon?: IconName
  Icon?: IconName
  styles?: string
  theme?: Theme
  typographySize?: TypographySize
  fontWeight?: FontWeight
  leading?: Leading
}
