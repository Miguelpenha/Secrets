import { MaterialIcons } from '@expo/vector-icons'

export interface Itheme {
  color: string
  error: string
  success: string
  primary: string
  name: IthemeType
  secondary: string
  secondaryColor: string
  backgroundColor: string
  backgroundColorSecondary: string
}

export enum ThemeNameType {
  dark = 'dark',
  light = 'light'
}

export type IthemeType = keyof typeof ThemeNameType

export type Inavigation = {
  Home: undefined
  Settings: undefined
  Secret: {
    id: string
  }
  CreateSecret: undefined
  Password: {
    initial: boolean
  }
  Security: undefined
}

export interface ISecret {
  id: string
  name: string
  type: string
  value: string
  secure?: boolean
  password?: string
  hideIcon?: boolean
  icon: keyof typeof MaterialIcons.glyphMap
}

export interface ISecurity {
  verifyPasswordWhenDeleteSecret: boolean
  verifyPasswordWhenChangePassword: boolean
  verifyPasswordWhenSecurityConfiguration: boolean
}