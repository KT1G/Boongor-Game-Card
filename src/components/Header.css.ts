import { style } from '@vanilla-extract/css'

export const header = style({
  width: '100%',
  display: 'flex',
  height: '5rem',
  padding: '0.5rem',
  alignItems: 'center',
  backgroundColor: '#111111',
  borderBottom: '1px solid #696053',
})

export const title = style({
  fontFamily: 'metrofutura , sans-serif , monospace',
  marginLeft: ' 3rem',
  color: 'white',
  fontSize: '25px',
  letterSpacing: '40px',
})
