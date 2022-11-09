import type {PaletteMode} from '@mui/material'

export const COLORS = {
  'light-1': '#353535',
  'light-2': '#013237',
  'light-3': '#C0E6BA',
  'light-4': '#EAF9E7',
  'dark-1': '#526260',
  'dark-2': '#75898A',
  'dark-3': '#ECECED',
  'dark-4': '#9ADAD2',
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode, ...(mode === 'light') ?
      {
        primary: {
          main: COLORS['light-2'],
        },
        secondary: {
          main: COLORS['light-3'],
        },
      } : {
        primary: {
          main: COLORS['dark-4'],
        },
        secondary: {
          main: COLORS['dark-3'],
        },
      },
  },
})
