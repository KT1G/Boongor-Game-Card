import { style } from '@vanilla-extract/css'

// HEADER
export const card = style({
  position: 'relative',
  backgroundColor: '#212021',
  overflow: 'hidden',
  cursor: 'pointer',
  border: '7px solid #212021',
  borderRadius: '5px',
  width: '13.5rem',
  height: '20rem',
  ':before': {
    position: 'absolute',
    borderRadius: '5px',
    zIndex: 1,
    content: '',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '50%',
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
export const cssNoShadow = style({
  ':before': {
    background: 'none',
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

export const containerName = style({
  position: 'relative',
  minWidth: '3.4rem',
  padding: '.2rem .5rem',
  marginTop: '3px',
  background:
    'linear-gradient(0deg, rgba(11,11,11,1) 0%, rgba(38,38,38,1) 49%, rgba(33,32,33,1) 100%)',

  color: '#f0ebe1de',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10px',
  borderRadius: '10px',
  fontFamily: 'metrofutura , sans-serif , monospace',

  '@media': {
    'screen and (max-width: 500px)': {
      minWidth: '5rem',
      height: '1rem',
    },
  },
})

export const textName = style({
  position: 'relative',
  fontFamily: 'Lol, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '7px',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 500px)': {
      fontSize: '12px',
    },
  },
})

export const tipoContainerWithoutAbility = style({
  position: 'absolute',
  top: '8rem',
  left: '2.5rem',
  height: '100px',
  width: '100px',
  borderRadius: '50%',
  ':before': {
    position: 'absolute',
    left: '.7rem',
    top: '-.8rem',
    borderRadius: '50%',
    content: '',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    filter: 'blur(14px) ',
  },
  '@media': {
    'screen and (max-width: 800px)': {
      position: 'absolute',
      top: '10rem',
      left: '3.7rem',
      height: '100px',
      width: '100px',
      borderRadius: '50%',
    },
    'screen and (max-width: 650px)': {
      position: 'absolute',
      top: '7.3rem',
      left: '2.5rem',
      height: '100px',
      width: '100px',
      borderRadius: '50%',
    },
    'screen and (max-width: 550px)': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-60%, 100%)',
      height: '100px',
      width: '100px',
      borderRadius: '50%',
    },
    'screen and (max-width: 500px)': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-37%, 100%)',
      height: '200px',
      width: '200px',
      borderRadius: '50%',
      ':before': {
        position: 'absolute',
        left: '-1.2rem',
        top: '-1rem',
        borderRadius: '50%',
        content: '',
        width: '%',
        height: '100%',
        backgroundColor: 'black',
        filter: 'blur(17px) ',
      },
    },
  },
})

export const tipoContainerWithAbility = style({
  position: 'absolute',
  height: '35px',
  width: '35px',
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

export const tipoDamageWithAbility = style({
  position: 'absolute',
  objectFit: 'contain',
  right: 5,
  objectPosition: 'center',
  width: '65%',
  height: '70%',
  '@media': {
    'screen and (max-width: 500px)': {
      left: '10px',
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
  fontFamily: 'Lol, sans-serif',
  fontSize: '10px',
  fontWeight: '25px',
  '@media': {
    'screen and (max-width: 500px)': {
      fontSize: '17px',
    },
  },
})

// IMGAE

export const image = style({
  position: 'absolute',
  borderRadius: '5px',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})

export const imageBasic = style({
  position: 'absolute',
  borderRadius: '5px',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})
