import { style } from '@vanilla-extract/css'
import { font } from '../text.css'

export const main = style({
  fontFamily: font,
  height: '100%',
  margin: 'auto',
  marginTop: '10rem',
  width: 'clamp(200px, 90%, 1000px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  '@media': {
    'screen and (max-width: 800px)': {
      gap: '3rem',
    },
  },
})
