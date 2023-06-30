import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  width: '100%',
  top: '0',
  zIndex: 999,
  display: 'flex',
  height: '5rem',
  padding: '0.5rem',
  alignItems: 'center',
  backgroundColor: '#111111',
  borderBottom: '1px solid #696053',
  '@media': {
    'screen and (max-width: 500px)': {
      justifyContent: 'center',
    },
  },
})

export const title = style({
  fontFamily: 'metrofutura',
  marginLeft: ' 5rem',
  color: 'white',
  fontSize: '25px',
  letterSpacing: '40px',
  '@media': {
    'screen and (min-width: 800px)': {
      marginLeft: '3rem'
    },
  },
})
