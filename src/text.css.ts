// text.css.ts
import { globalFontFace, style } from '@vanilla-extract/css'

const beaufortFont = 'BeaufortforLOL'
const metrofutura = 'Metrofutura'

globalFontFace(metrofutura, {
  src: 'local("Metrofutura")',
})
globalFontFace(beaufortFont, {
  src: 'local("BeaufortforLOL-Regular")',
})

export const font = style({
  fontFamily: beaufortFont,
})
