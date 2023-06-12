import jacoCard1 from '../assets/jaco/jacoCard1.webp'
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
import osoCard1 from '../assets/oso/osoCard1.webp'
import osoCard2 from '../assets/oso/osoCard2.webp'
import zCard1 from '../assets/z/zCard1.webp'
import zCard2 from '../assets/z/zCard2.webp'

// Cartas trampa imports

import dejameIrCard from '../assets/otros/dejameIrCard.webp'
import shadowLightsCard from '../assets/otros/shadowLightsCard.webp'
import boongorCard from '../assets/otros/boongorCard.webp'
import vuelveCard from '../assets/otros/vuelveCard.webp'
import libranosCard from '../assets/otros/libranosCard.webp'
import rebote from '../assets/otros/rebote.webp'
import itsATrap from '../assets/otros/its-a-trap.webp'
import kebab from '../assets/otros/kebab.webp'
import kratosCard from '../assets/otros/kratosCard.webp'
import tramposilloCard from '../assets/otros/tramposilloCard.webp'

export type CardType = 'basic' | 'habilidad' | 'trap' | 'point'

export interface Carta {
  id: number
  cartaTipo: CardType
  imagen: string
  name?: string
  titulo?: string
  tipo?: string
  habilidad?: string
  instantanea?: boolean
}

export const cartasConHabilidad: Carta[] = [
  {
    id: 1,
    name: 'Jason',
    titulo: 'Jacobo no sabe lo que quiere',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Al final del turno, después de robar, puedes devolver tus cartas al mazo y robar el mismo número.',
    imagen: jacoCard1,
    cartaTipo: 'habilidad',
  },
  {
    id: 2,
    name: 'Oso',
    titulo: 'Oso Rapero',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Si la última palabra de la descripción de tu oponente acaba en vocal, si ganas el turno sumarás un punto extra a la racha.',
    imagen: osoCard1,
    cartaTipo: 'habilidad',
  },
  {
    id: 3,
    name: 'Oso',
    titulo: 'Oso Hambriento',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Obligas a tu oponente a desechar una de sus cartas, si ganas este turno la carta vuelve a tu mano.',
    imagen: osoCard2,
    cartaTipo: 'habilidad',
  },
  {
    id: 4,
    name: 'Elious',
    titulo: 'Elías Huevos Caseros',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Si tu oponente utiliza una carta del mismo tipo, ganarás el turno independientemente de la habilidad de tu oponente.',
    imagen: eliasCard1,
    cartaTipo: 'habilidad',
  },
  {
    id: 5,
    name: 'Elious',
    titulo: 'Seguro que la pierdo...',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Si pierdes la mano, aumentas en uno el número de cartas trampa que puedes usar por turno.',
    imagen: eliasCard2,
    cartaTipo: 'habilidad',
  },
  {
    id: 6,
    name: 'ElKaters',
    titulo: 'Braian Siempre Tiene Razón',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Anulas la habilidad de tu oponente, si ganas aumenta el número máximo de cartas que puedes tener en la mano en uno.',
    imagen: braianCard1,
    cartaTipo: 'habilidad',
  },
  {
    id: 7,
    name: 'ElKaters',
    titulo: 'Braian Todo lo Sabe',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Puedes ver 2 cartas a tu elección de la mano de tu oponente, si ganas la ronda puedes quedarte una de ellas o robar una carta extra este turno.',
    imagen: braianCard2,
    cartaTipo: 'habilidad',
  },
  {
    id: 8,
    name: 'Chomi',
    titulo: 'Lucas Policía',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Tu rival no podrá robar carta el siguiente turno, en caso de perder la ronda robas 2 cartas extra.',
    imagen: chomsCard1,
    cartaTipo: 'habilidad',
  },
  {
    id: 9,
    name: 'Chomi',
    titulo: 'Iguales ante la Ley',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'En caso de empate robas una carta extra durante los 3 próximos turnos.',
    imagen: chomsCard2,
    cartaTipo: 'habilidad',
  },
  {
    id: 10,
    name: 'Yurch',
    titulo: 'Jorgiña',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Copias la habilidad de la carta de tu oponente que acaba de usar este turno. Si la carta no tiene habilidad y pierdes, anulas tu racha de derrotas.',
    imagen: jorgeCard1,
    cartaTipo: 'habilidad',
  },
  {
    id: 11,
    name: 'Yurch',
    titulo: 'Como Pez en el Agua',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Anulas cualquier carta trampa que tu oponente pueda activar esta ronda, no se puede cancelar su efecto.',
    imagen: jorgeCard2,
    cartaTipo: 'habilidad',
  },
  {
    id: 12,
    name: 'Jason',
    titulo: 'Vigorizador',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Duplica el efecto de tu siguiente carta de Desafío si tu habilidad se activa primero y no empatas esta ronda, permanecerá en la mesa hasta que se aplique su efecto.',
    imagen: jacoCard2,
    cartaTipo: 'habilidad',
  },
  {
    id: 13,
    name: 'Alexito',
    titulo: 'ALL-IN',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Si ganas este turno, subes 2 escalones; si pierdes, bajas uno. Se resetea la racha de victorias o derrotas.',
    imagen: alexitoCard1,
    cartaTipo: 'habilidad',
  },
  {
    id: 14,
    name: 'Alexito',
    titulo: 'Ratatata',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Puedes desafiar a dos oponentes diferentes en este turno. Juega una carta de desafío contra cada uno y resuelve los enfrentamientos por separado. Si ganas ambos enfrentamientos, subes 1 escalón. Tu racha de victorias no se ve afectada.',
    imagen: alexitoCard2,
    cartaTipo: 'habilidad',
  },
  {
    id: 15,
    name: 'Magnum',
    titulo: 'Felix, Maestro del caos',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Obligas a intercambiar las cartas de la mano de tu oponente con las tuyas al final del turno, el intercambio será equivalente al número de cartas del jugador que tenga menos, si ganas puedes hacer un intercambio completo, independientemente de la diferencia de cartas entre ambos.',
    imagen: zCard1,
    cartaTipo: 'habilidad',
  },
  {
    id: 16,
    name: 'Magnum',
    titulo: 'El poder del cabello nasal',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Elige una carta de tu oponente de forma aleatoria, si es una carta trampa, la descartas y ganas el turno. Si ya ganabas, sumas un punto extra a la racha.',
    imagen: zCard2,
    cartaTipo: 'habilidad',
  },
]

export const cartasSinHabilidad: Carta[] = [
  {
    id: 1,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: jacoCard1,
    cartaTipo: 'basic',
  },
  {
    id: 2,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: osoCard1,
    cartaTipo: 'basic',
  },
  {
    id: 3,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: osoCard2,
    cartaTipo: 'basic',
  },
  {
    id: 4,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: eliasCard1,
    cartaTipo: 'basic',
  },
  {
    id: 5,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: eliasCard2,
    cartaTipo: 'basic',
  },
  {
    id: 6,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: braianCard1,
    cartaTipo: 'basic',
  },
  {
    id: 7,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: braianCard2,
    cartaTipo: 'basic',
  },
  {
    id: 8,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: chomsCard1,
    cartaTipo: 'basic',
  },
  {
    id: 9,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: chomsCard2,
    cartaTipo: 'basic',
  },
  {
    id: 10,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: jorgeCard1,
    cartaTipo: 'basic',
  },
  {
    id: 11,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: jorgeCard2,
    cartaTipo: 'basic',
  },
  {
    id: 12,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    imagen: jacoCard2,
    cartaTipo: 'basic',
  },
  {
    id: 13,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: alexitoCard1,
    cartaTipo: 'basic',
  },
  {
    id: 14,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: alexitoCard2,
    cartaTipo: 'basic',
  },
  {
    id: 15,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    imagen: zCard1,
    cartaTipo: 'basic',
  },
  {
    id: 16,
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    imagen: zCard2,
    cartaTipo: 'basic',
  },
]

export const cartasTrampa: Carta[] = [
  {
    id: 1,
    name: 'Trampa',
    titulo: 'Dejame ir delante',
    habilidad:
      'Independientemente de quien tenga la prioridad, tu habilidad se activará primero',
    imagen: dejameIrCard,
    cartaTipo: 'trap',
    instantanea: false,
  },
  {
    id: 3,
    name: 'Trampa',
    titulo: 'Shadow ligths',
    habilidad: 'Transforma tu racha de derrotas en victorias',
    imagen: shadowLightsCard,
    cartaTipo: 'trap',
    instantanea: false,
  },
  {
    id: 4,
    name: 'Trampa',
    titulo: 'Boongor',
    habilidad:
      'Te permite enfrentarte al que esté en el escalón más alto. Si ganas, subes hasta el mismo escalón. Si ya vas primero, te enfrentas contra el último. Si ganas, subes 1 y no pierdes la racha.',
    cartaTipo: 'trap',
    instantanea: true,
    imagen: boongorCard,
  },
  {
    id: 5,
    name: 'Trampa',
    titulo: 'Vuelve a mirar',
    habilidad: 'Transforma el tipo de tu carta a tu elección',
    imagen: vuelveCard,
    cartaTipo: 'trap',
    instantanea: false,
  },
  {
    id: 6,
    name: 'Trampa',
    titulo: 'Un poco tranposillo',
    habilidad:
      'Aumenta el número de cartas trampas que puedes usar y la cantidad máxima de cartas que puedes tener en 1.',
    imagen: tramposilloCard,
    cartaTipo: 'trap',
    instantanea: true,
  },
  {
    id: 7,
    name: 'Trampa',
    titulo: 'Libranos del mal',
    habilidad:
      'Si robas una carta de bajar escalón, puedes usarla para librarte.',
    imagen: libranosCard,
    cartaTipo: 'trap',
    instantanea: false,
  },
  {
    id: 8,
    name: 'Trampa',
    titulo: 'Kebab',
    habilidad: 'Te da la fuerza necesaria para subir un escalón.',
    imagen: kebab,
    cartaTipo: 'trap',
    instantanea: true,
  },
  {
    id: 9,
    name: 'Trampa',
    titulo: 'Tobillos de goma',
    habilidad: 'Bajas un escalón.',
    imagen: libranosCard,
    cartaTipo: 'trap',
    instantanea: true,
  },
  {
    id: 10,
    name: 'Trampa',
    titulo: 'Rebote',
    habilidad: 'Desvía un desafío al jugador con más escalones.',
    imagen: rebote,
    cartaTipo: 'trap',
    instantanea: false,
  },
  {
    id: 11,
    name: 'Trampa',
    titulo: 'Its a trap',
    habilidad: 'Devuelve tus cartas trampa y roba la misma cantidad.',
    imagen: itsATrap,
    cartaTipo: 'trap',
    instantanea: true,
  },
  {
    id: 12,
    name: 'Trampa',
    titulo: 'Kratos',
    habilidad:
      'Enfrentas a dos jugadores, eliges a uno como tu avatar. Si tu avatar gana, ganas el punto. Si empatan, ambos pierden uno.',
    imagen: kratosCard,
    cartaTipo: 'trap',
    instantanea: true,
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
