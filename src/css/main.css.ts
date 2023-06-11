import { style } from '@vanilla-extract/css'
import { font } from '../text.css'

export const main = style({
  fontFamily: font,
  height: '100%',
  margin: 'auto',
  marginTop: '3rem',
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

export const containersCardAnimated = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  marginBottom: '10rem',
})

export const buttonsSwitch = style({
  backgroundColor: 'transparent',
  fontFamily: font,
  padding: '.4rem',
  letterSpacing: 3,
  border: '1px solid black',
  cursor: 'pointer',
  borderRadius: '7px',
  ':hover': {
    border: '1px solid hsl(0, 0%, 29%)',
    transition: '.4s ease-in-out',
    backgroundColor: 'hsl(0, 0%, 9%)',
  },
  ':disabled': {
    backgroundColor: '#f7f7f7',
    color: 'black', // Cambiar el color de texto según necesites,
    cursor: 'auto',
  },
})
