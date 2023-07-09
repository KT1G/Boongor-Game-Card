import { style } from '@vanilla-extract/css'

// HEADER
export const card = style({
  transformStyle: 'preserve-3d',
  perspective: '600px',
  overflow: 'hidden',
  cursor: 'pointer',
  width: '20.25rem',
  height: '30rem',


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
      width: '97%',
      height: '35rem',
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

export const containerName = style({
  position: 'relative',
  minWidth: '5.1rem',
  padding: '.3rem .6rem',
  boxShadow: '-webkit-box-shadow: 6px 13px 26px -7px rgba(0,0,0,0.75)',
  marginTop: 'var(--marginTopName)',
  background:
    'linear-gradient(0deg, rgba(11,11,11,1) 0%, rgba(38,38,38,1) 49%, rgba(33,32,33,1) 100%)',

  color: '#f0ebe1de',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '18px',
  borderRadius: '3px',
  fontFamily: 'metrofutura , sans-serif , monospace',

  '@media': {
    'screen and (max-width: 600px)': {
      minWidth: '4rem',
      height: '1rem',
    },
  },
})

export const textName = style({
  position: 'relative',
  fontFamily: 'Lol, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  fontSize: '12px',
  textAlign: 'center',
  color: 'white',
  top: -0.8,
  '@media': {
    'screen and (max-width: 550px)': {
      fontSize: '10px',
    },
    'screen and (max-width: 500px)': {
      fontSize: '12px',
    },
  },
})

export const tipoContainerWithoutAbility = style({
  position: 'absolute',
  top: '13rem',
  left: '4.2rem',
  height: '150px',
  width: '150px',
  borderRadius: '50%',
  ':before': {
    position: 'absolute',
    left: '.8rem',
    top: '-.6rem',
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
      left: '2.4rem',
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
        left: '-1.5rem',
        top: '-1.5rem',
        borderRadius: '50%',
        content: '',
        height: '100%',
        backgroundColor: 'black',
        filter: 'blur(30px) ',
      },
    },
  },
})

export const tipoContainerWithAbility = style({
  position: 'absolute',
  height: '52.5px',
  width: '52.5px',
  borderRadius: '7px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  right: 27,
  top: 27,
  background:
    'linear-gradient(0deg, rgba(11,11,11,1) 0%, rgba(38,38,38,1) 49%, rgba(33,32,33,1) 100%)',
  '@media': {
    'screen and (max-width: 650px)': {
      width: '35px',
      height: '35px',
      right: '15px',
    },
    'screen and (max-width: 500px)': {
      width: '60px',
      height: '60px',
      right: '40px',
    },
  },
})

export const tipoDamageWithAbility = style({
  position: 'absolute',
  objectFit: 'contain',
  right: 8,
  top: 7,
  objectPosition: 'center',
  width: '65%',
  height: '70%',
  '@media': {
    'screen and (max-width: 650px)': {
      left: '7px',
      top:'5px',
      width: '60%',
    },
    'screen and (max-width: 500px)': {
      left: '11px',
      top: '8px',
      width: '65%',
    },
  },
})

// MAIN

export const description = style({
  margin: 0,
  backdropFilter: 'blur(1px)',
  zIndex: '1',
  position: 'absolute',
  bottom: 45,
  left: 30,
  textAlign: 'center',
  width: '80%',
  color: 'white',
  '@media': {
    'screen and (max-width: 800px)': {
      bottom: '40px',
      left: '22px',

    },
    'screen and (max-width: 500px)': {
      bottom: '70px',
      left: '2.3rem',
    },
  },
})
export const descriptionTittle = style({
  margin: 0,
  zIndex: '99',
  textTransform: 'uppercase',
  fontFamily: 'metrofutura , sans-serif , monospace',
  fontWeight: 'bold',
  fontSize: 'var( --sizeTitleDescription)',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 800px)': {
      fontSize: '24px',
    },
    'screen and (max-width: 550px)': {
      fontSize: '16px',
    },
    'screen and (max-width: 500px)': {
      fontSize: '30px',
    },
  },
})
export const descriptionText = style({
  zIndex: '99',
  color: '#e3fffa',
  fontFamily: 'Lol, sans-serif',
  fontSize: 'var(--sizeDescription)',
  fontWeight: '25px',
  '@media': {
     'screen and (max-width: 800px)': {
      fontSize: '12px',
    },
    'screen and (max-width: 500px)': {
      fontSize: '17px',
    },
  },
})

// IMage

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
