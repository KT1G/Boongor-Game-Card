import { style } from '@vanilla-extract/css'

export const main = style({
  fontFamily: 'Metrofutura',
  height: '100%',
  margin: 'auto',
  marginTop: '7rem',
  width: 'clamp(200px, 90%, 1300px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',
  '@media': {
    'screen and (max-width: 800px)': {
      flexDirection: 'column', // Cambia la dirección de la columna en dispositivos móviles
    },
  },
})

export const containerButtons = style({
  display: 'flex',
  gap: '3rem',
  '@media': {
    'screen and (max-width: 800px)': {
      display: 'none', // Oculta el contenedor de botones en dispositivos móviles
    },
  },
})

export const buttonsSwitch = style({
  backgroundColor: 'transparent',
  fontFamily: 'Lol',
  color: 'white',
  padding: '.4rem',
  letterSpacing: 4,
  fontSize: '14px',
  border: '1px solid black',
  cursor: 'pointer',
  borderRadius: '7px',
  ':hover': {
    border: '1px solid hsl(0, 0%, 29%)',
    transition: '.4s ease-in-out',
    backgroundColor: 'hsl(0, 0%, 9%)',
  },
  '@media': {
    'screen and (max-width: 800px)': {
      // Oculta el contenedor de botones en dispositivos móviles
      fontSize: '18px',
    },
  },
})

export const buttonSelected = style({
  background: 'white',
  color: 'black',
  ':hover': {
    background: 'white',
    color: 'black',
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

export const containersCardAnimated = style({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  marginBottom: '10rem',
})
