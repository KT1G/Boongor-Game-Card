import jacoCard1 from '../assets/jaco/jacoCard1.png'
import jacoCard2 from '../assets/jaco/jacoCard2.webp'
import alexitoCard1 from '../assets/alexito/alexitoCard1.webp'
import alexitoCard2 from '../assets/alexito/alexitoCard2.webp'
import braianCard1 from '../assets/braian/braianCard1.webp'
import braianCard2 from '../assets/braian/braianCard2.webp'
import chomsCard1 from '../assets/choms/chomsCard1.webp'
import chomsCard2 from '../assets/choms/chomsCard2.webp'
import eliasCard1 from '../assets/elias/eliasCard1.webp'
import eliasCard2 from '../assets/elias/eliasCard2.webp'
import jorgeCard1 from '../assets/jorge/jorgeCard1.webp'
import jorgeCard2 from '../assets/jorge/jorgeCard2.webp'
import osoCard1 from '../assets/oso/osoCard1.png'
import osoCard2 from '../assets/oso/osoCard2.webp'
import zCard1 from '../assets/z/zCard1.webp'
import zCard2 from '../assets/z/zCard2.webp'

// Cartas trampa imports

import dejameIrCard from '../assets/otros/dejameIrCard.webp'
import shadowLightsCard from '../assets/otros/shadowLightsCard.webp'
import boongorCard from '../assets/otros/boongorCard.webp'
import vuelveCard from '../assets/otros/vuelveCard1.webp'
import libranosCard from '../assets/otros/libranosCard.webp'
import rebote from '../assets/otros/rebote.webp'
import itsATrap from '../assets/otros/its-a-trap.webp'
import kebab from '../assets/otros/kebab.webp'
import kratosCard from '../assets/otros/kratosCard.webp'
import tramposilloCard from '../assets/otros/tramposilloCard.webp'
import tobillos from '../assets/otros/tobillos.webp'

// Cartas puntos

import cardPoint2 from '../assets/points/escalon2.webp'
import cardPoint3 from '../assets/points/escalon3.webp'
import cardPoint4 from '../assets/points/escalon4.webp'
import cardPoint5 from '../assets/points/escalon5.webp'
import cardPoint6 from '../assets/points/escalon6.webp'
import cardPoint7 from '../assets/points/escalon7.webp'
import points1 from '../assets/points/points1.webp'
import points2 from '../assets/points/points2.webp'
import points4 from '../assets/points/points4.webp'

export type CardType = 'RULES' | 'BASIC' | 'ABILITY' | 'TRAP' | 'POINT'
export enum CardTypeEnum {
  RULES = 'RULES',
  BASIC = 'BASIC',
  ABILITY = 'ABILITY',
  TRAP = 'TRAP',
  POINT = 'POINT',
}

export interface Carta {
  id: number
  cartaTipo: CardType
  imagen: string
  name?: string
  title?: string
  tipo?: string
  ability?: string
  instantanea?: boolean
  isEpic?: boolean
}

export const cartasConHabilidad: Carta[] = [
  {
    id: 1,
    name: 'Jason',
    title: 'No se lo que quiero',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    ability:
      'Al final del turno, después de robar, puedes devolver tus cartas al mazo y robar el mismo número.',
    imagen: jacoCard1,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 2,
    name: 'Oso',
    title: 'Oso Rapero',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    ability:
      'Si la última palabra de la descripción de tu oponente acaba en vocal, si ganas el turno sumarás un punto extra a la racha.',
    imagen: osoCard1,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 3,
    name: 'Oso',
    title: 'Oso Hambriento',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    ability:
      'Obligas a tu oponente a desechar una de sus cartas, si ganas este turno la carta vuelve a tu mano.',
    imagen: osoCard2,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 4,
    name: 'Elious',
    title: 'Lo mio es casero',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    ability:
      'Si tu oponente utiliza una carta del mismo tipo, ganarás el turno independientemente de la habilidad de tu oponente.',
    imagen: eliasCard1,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 5,
    name: 'Elious',
    title: 'Esta la pierdo...',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    ability:
      'Si pierdes la mano, aumentas en uno el número de cartas trampa que puedes usar por turno.',
    imagen: eliasCard2,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 6,
    name: 'ElKaters',
    title: 'Siempre Tengo Razón',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    ability:
      'Anulas la habilidad de tu oponente, si ganas aumenta el número máximo de cartas que puedes tener en la mano en uno.',
    imagen: braianCard1,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 7,
    name: 'ElKaters',
    title: 'A ver dejame ver...',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    ability:
      'Puedes ver 2 cartas a tu elección de la mano de tu oponente, si ganas la ronda puedes quedarte una de ellas o robar una carta extra este turno.',
    imagen: braianCard2,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 8,
    name: 'Chomi',
    title: 'Quietitas las manos',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    ability:
      'Tu rival no podrá robar carta el siguiente turno, en caso de perder la ronda robas 2 cartas extra.',
    imagen: chomsCard1,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 9,
    name: 'Chomi',
    title: 'Iguales ante la Ley',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    ability:
      'En caso de empate robas una carta extra durante los 3 próximos turnos.',
    imagen: chomsCard2,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 10,
    name: 'Yurch',
    title: 'Jorgiña',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    ability:
      'Copias la habilidad de la carta de tu oponente que acaba de usar este turno. Si la carta no tiene habilidad y pierdes, anulas tu racha de derrotas.',
    imagen: jorgeCard1,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 11,
    name: 'Yurch',
    title: 'Como Pez en el Agua',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    ability:
      'Anulas cualquier carta trampa que tu oponente pueda activar esta ronda, no se puede cancelar su efecto.',
    imagen: jorgeCard2,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 12,
    name: 'Jason',
    title: 'Vigorizador',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    ability:
      'Duplica el efecto de tu siguiente carta de Desafío si tu habilidad se activa primero y no empatas esta ronda, permanecerá en la mesa hasta que se aplique su efecto.',
    imagen: jacoCard2,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 13,
    name: 'Alexito',
    title: 'ALL-IN',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    ability:
      'Si ganas este turno, subes 2 escalones; si pierdes, bajas uno. Se resetea la racha de victorias o derrotas.',
    imagen: alexitoCard1,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 14,
    name: 'Alexito',
    title: 'Ratatata',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    ability:
      'Puedes desafiar a dos oponentes diferentes en este turno. Juega una carta de desafío contra cada uno y resuelve los enfrentamientos por separado. Si ganas ambos enfrentamientos, subes 1 escalón. Tu racha de victorias no se ve afectada.',
    imagen: alexitoCard2,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 15,
    name: 'Magnum',
    title: 'Maestro del caos',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    ability:
      'Obligas a intercambiar las cartas de la mano de tu oponente con las tuyas al final del turno, el intercambio será equivalente al número de cartas del jugador que tenga menos, si ganas puedes hacer un intercambio completo, independientemente de la diferencia de cartas entre ambos.',
    imagen: zCard1,
    cartaTipo: CardTypeEnum.ABILITY,
  },
  {
    id: 16,
    name: 'Magnum',
    title: 'El poder del cabello nasal',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    ability:
      'Elige una carta de tu oponente de forma aleatoria, si es una carta trampa, la descartas y ganas el turno. Si ya ganabas, sumas un punto extra a la racha.',
    imagen: zCard2,
    cartaTipo: CardTypeEnum.ABILITY,
  },
]

export const cartasSinHabilidad: Carta[] = [
  {
    id: 1,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: jacoCard1,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 2,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: osoCard1,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 3,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: osoCard2,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 4,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: eliasCard1,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 5,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: eliasCard2,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 6,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: braianCard1,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 7,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: braianCard2,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 8,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: chomsCard1,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 9,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: chomsCard2,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 10,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: jorgeCard1,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 11,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: jorgeCard2,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 12,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: jacoCard2,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 13,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: alexitoCard1,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 14,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: alexitoCard2,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 15,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: zCard1,
    cartaTipo: CardTypeEnum.BASIC,
  },
  {
    id: 16,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: zCard2,
    cartaTipo: CardTypeEnum.BASIC,
  },
]

export const cartasTrampa: Carta[] = [
  {
    id: 1,
    name: 'Trampa',
    title: 'Dejame ir delante',
    ability:
      'Independientemente de quien tenga la prioridad, tu habilidad se activará primero',
    imagen: dejameIrCard,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: false,
  },
  {
    id: 3,
    name: 'Trampa',
    title: 'Shadow ligths',
    ability: 'Transforma tu racha de derrotas en victorias',
    imagen: shadowLightsCard,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: false,
    isEpic: true,
  },
  {
    id: 4,
    name: 'Trampa',
    title: 'Boongor',
    ability:
      'Te permite enfrentarte al que esté en el escalón más alto. Si ganas, subes hasta el mismo escalón. Si ya vas primero, te enfrentas contra el último. Si ganas, subes 1 y no pierdes la racha. Solo se puede usar al principio de tu turno',
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: false,
    imagen: boongorCard,
    isEpic: true,
  },
  {
    id: 5,
    name: 'Trampa',
    title: 'Vuelve a mirar',
    ability: 'Transforma el tipo de tu carta en la de tu adversario',
    imagen: vuelveCard,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: false,
  },
  {
    id: 6,
    name: 'Trampa',
    title: 'Un poco tranposillo',
    ability:
      'Aumenta el número de cartas trampas que puedes usar y la cantidad máxima de cartas que puedes tener en 1.',
    imagen: tramposilloCard,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: true,
  },
  {
    id: 7,
    name: 'Trampa',
    title: 'Libranos del mal',
    ability:
      'Si robas una carta de bajar escalón, puedes usarla para librarte.',
    imagen: libranosCard,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: false,
  },
  {
    id: 8,
    name: 'Trampa',
    title: 'Kebab',
    ability: 'Te da la fuerza necesaria para subir un escalón.',
    imagen: kebab,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: true,
  },
  {
    id: 9,
    name: 'Trampa',
    title: 'Tobillos de goma',
    ability: 'Bajas un escalón.',
    imagen: tobillos,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: true,
  },
  {
    id: 10,
    name: 'Trampa',
    title: 'Rebote',
    ability: 'Desvía un desafío al jugador con más escalones.',
    imagen: rebote,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: false,
  },
  {
    id: 11,
    name: 'Trampa',
    title: 'Its a trap',
    ability: 'Devuelve tus cartas trampa y roba la misma cantidad.',
    imagen: itsATrap,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: true,
  },
  {
    id: 12,
    name: 'Trampa',
    title: 'Kratos',
    ability:
      'Enfrentas a dos jugadores, eliges a uno como tu avatar. Si tu avatar gana, ganas el punto. Si empatan, ambos pierden uno. solo puedes usarla al principio de tu turno. Puedes desafiar a otro jugador a mayores si lo deseas ',
    imagen: kratosCard,
    cartaTipo: CardTypeEnum.TRAP,
    instantanea: false,
  },
]

export const cartasPuntos: Carta[] = [
  {
    id: 1,
    tipo: points1,
    name: 'ESCALÓN',
    imagen: cardPoint2,
    cartaTipo: CardTypeEnum.POINT,
  },
  {
    id: 2,
    tipo: points2,
    name: 'ESCALÓN',
    imagen: cardPoint3,
    cartaTipo: CardTypeEnum.POINT,
  },
  {
    id: 3,
    tipo: points4,
    name: 'ESCALÓN',
    imagen: cardPoint4,
    cartaTipo: CardTypeEnum.POINT,
  },
  {
    id: 4,
    tipo: points1,
    name: 'ESCALÓN',
    imagen: cardPoint5,
    cartaTipo: CardTypeEnum.POINT,
  },
  {
    id: 5,
    tipo: points2,
    name: 'ESCALÓN',
    imagen: cardPoint6,
    cartaTipo: CardTypeEnum.POINT,
  },
  {
    id: 6,
    tipo: points4,
    name: 'ESCALÓN',
    imagen: cardPoint7,
    cartaTipo: CardTypeEnum.POINT,
  },
]

export const jugadores = [
  {
    nombre: 'Jason',
    cartas: [1, 13], // IDs de las cartas de Jacobo
  },
  {
    nombre: 'Alexito',
    cartas: [11, 12], // IDs de las cartas de Alexito
  },
  {
    nombre: 'Elious',
    cartas: [4, 5], // IDs de las cartas de Elias
  },
  {
    nombre: 'ElKaters',
    cartas: [6, 7], // IDs de las cartas de Braian
  },
  {
    nombre: 'Chomi',
    cartas: [8, 9], // IDs de las cartas de Lucas
  },
  {
    nombre: 'Yurch',
    cartas: [10, 14], // IDs de las cartas de Jorge
  },
  {
    nombre: 'MagnumZRare',
    cartas: [15, 16], // IDs de las cartas de Felix
  },
  // Agregar los demás jugadores con sus respectivas cartas
]
