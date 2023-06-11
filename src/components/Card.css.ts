import { style } from '@vanilla-extract/css'
import { font } from '../text.css'

// HEADER
export const card = style({
  position: 'relative',
  cursor: 'pointer',
  border: '4px solid #212021',
  width: '13.5rem',
  height: '20rem',
  ':before': {
    position: 'absolute',
    zIndex: 1,
    content: '',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 78%)',
  },

  '@media': {
    'screen and (max-width: 800px)': {
      width: '16rem',
      height: '25rem',
    },
    'screen and (max-width: 650px)': {
      width: '13.5rem',
      height: '20rem',
    },
    'screen and (max-width: 555px)': {
      width: '12rem',
      height: '18rem',
    },
    'screen and (max-width: 500px)': {
      width: '95%',
      height: '35rem',
      border: '6px solid #212021',
    },
  },
})

export const header = style({
  width: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  zIndex: '1',
})

export const containerPersona = style({
  position: 'relative',
  minWidth: '3rem',
  padding: '.3rem',
  marginTop: '2px',
  background:
    'linear-gradient(0deg, rgba(11,11,11,1) 0%, rgba(38,38,38,1) 49%, rgba(33,32,33,1) 100%)',

  color: '#f0ebe1de',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '4px',
  borderRadius: '10px',
  fontFamily: 'metrofutura , sans-serif , monospace',
  borderWidth: '1px solid ',

  '@media': {
    'screen and (max-width: 500px)': {
      width: '5rem',
      height: '.7rem',
    },
  },
})

export const titlePersona = style({
  position: 'relative',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '8px',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 500px)': {
      fontSize: '12px',
    },
  },
})

export const tipo = style({
  position: 'absolute',
  height: '20px',
  width: '20px',
  padding: '6px',
  borderBottomLeftRadius: '7px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  right: -1,
  top: -1,
  background:
    'linear-gradient(0deg, rgba(11,11,11,1) 0%, rgba(38,38,38,1) 49%, rgba(33,32,33,1) 100%)',
  '@media': {
    'screen and (max-width: 500px)': {
      width: '45px',
      height: '45px',
    },
  },
})

export const tipoImage = style({
  position: 'absolute',
  objectFit: 'contain',
  right: 3,
  objectPosition: 'center',
  width: '70%',
  height: '80%',
  '@media': {
    'screen and (max-width: 500px)': {
      left: '15px',
      width: '60%',
    },
  },
})

// MAIN

export const description = style({
  margin: 0,
  backdropFilter: 'blur(1px)',
  zIndex: '1',
  position: 'absolute',
  bottom: 30,
  left: 10,
  textAlign: 'center',
  width: '90%',
  color: 'white',
  '@media': {
    'screen and (max-width: 500px)': {
      bottom: '70px',
      left: '18px',
    },
  },
})
export const descriptionTittle = style({
  margin: 0,
  zIndex: '99',
  textTransform: 'uppercase',
  fontFamily: 'metrofutura , sans-serif , monospace',
  fontWeight: 'bold',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 500px)': {
      fontSize: '33px',
    },
  },
})
export const descriptionText = style({
  zIndex: '99',
  color: '#e3fffa',
  fontFamily: font,
  fontSize: '10px',
  fontWeight: '25px',
  '@media': {
    'screen and (max-width: 500px)': {
      fontSize: '17px',
    },
  },
})

export const image = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})
