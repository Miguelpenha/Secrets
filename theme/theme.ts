import { Itheme, ThemeNameType } from '../types'

export const dark: Itheme = {
    name: 'dark',
    backgroundColor: '#13111b',
    backgroundColorSecondary: '#201b2d',
    secondary: '#362d4d',
    secondaryColor: '#5a4b81',
    primary: '#8f77cd',
    color: '#c8bfe4',
    error: 'red',
    success: '#28A645'
}

export const light: Itheme = {
    name: 'light',
    backgroundColor: '#d6d0e7',
    backgroundColorSecondary: '#c0bbd5',
    secondary: '#362d4d',
    secondaryColor: '#6a599a',
    primary: '#a98df3',
    color: '#E1E1E6',
    error: 'red',
    success: '#28A645'
}

export default {
    [ThemeNameType.dark]: dark,
    [ThemeNameType.light]: light
}