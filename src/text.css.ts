// text.css.ts
import { globalFontFace, style } from '@vanilla-extract/css'

const beaufortFont = 'BeaufortforLOL'
const metrofutura = 'Metrofutura'

globalFontFace(beaufortFont, {
  src: 'local("BeaufortforLOL-Regular")',
})

globalFontFace(metrofutura, {
  src: 'local("Metrofutura")',
})

export const font = style({
  fontFamily: beaufortFont,
})
