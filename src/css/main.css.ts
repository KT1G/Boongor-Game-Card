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
  flexDirection: 'column',
  gap: '1rem',
  '@media': {
    'screen and (max-width: 800px)': {},
  },
})

// buttons

export const containerButtons = style({
  display: 'flex',
  gap: '2rem',
})

export const buttonsSwitch = style({
  backgroundColor: 'transparent',
  fontFamily: font,
  color: 'white',
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

export const borderBottom = style({
  margin: 'auto',
  zIndex: 10,
  width: 'clamp(30px,70%,1000px)',
  marginBottom: '5px',
  height: '1px',
  background:
    ' radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(254,254,254,1) 0%, rgba(255,255,255,0) 100%)',
})

// Container cardsAnimations
export const containersCardAnimated = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  marginBottom: '10rem',
})
