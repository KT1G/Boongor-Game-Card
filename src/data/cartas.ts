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

export interface Carta {
  id: number
  persona: string
  titulo: string
  tipo: string
  habilidad: string
  imagen: string
}

export const cartas: Carta[] = [
  {
    id: 1,
    persona: 'Jason',
    titulo: 'Jacobo no sabe lo que quiere',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Al final del turno, después de robar, puedes devolver tus cartas al mazo y robar el mismo número.',
    imagen: jacoCard1,
  },
  {
    id: 2,
    persona: 'Oso',
    titulo: 'Oso Rapero',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Si la última palabra de la descripción de tu oponente acaba en vocal, si ganas el turno sumarás un punto extra a la racha.',
    imagen: osoCard1,
  },
  {
    id: 3,
    persona: 'Oso',
    titulo: 'Oso Hambriento',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Obligas a tu oponente a desechar una de sus cartas, si ganas este turno la carta vuelve a tu mano.',
    imagen: osoCard2,
  },
  {
    id: 4,
    persona: 'Elious',
    titulo: 'Elías Huevos Caseros',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Si tu oponente utiliza una carta del mismo tipo, ganarás el turno independientemente de la habilidad de tu oponente.',
    imagen: eliasCard1,
  },
  {
    id: 5,
    persona: 'Elious',
    titulo: 'Seguro que la pierdo...',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Si pierdes la mano, aumentas en uno el número de cartas trampa que puedes usar por turno.',
    imagen: eliasCard2,
  },
  {
    id: 6,
    persona: 'ElKaters',
    titulo: 'Braian Siempre Tiene Razón',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Anulas la habilidad de tu oponente, si ganas aumenta el número máximo de cartas que puedes tener en la mano en uno.',
    imagen: braianCard1,
  },
  {
    id: 7,
    persona: 'ElKaters',
    titulo: 'Braian Todo lo Sabe',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Puedes ver 2 cartas a tu elección de la mano de tu oponente, si ganas la ronda puedes quedarte una de ellas o robar una carta extra este turno.',
    imagen: braianCard2,
  },
  {
    id: 8,
    persona: 'Chomi',
    titulo: 'Lucas Policía',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Tu rival no podrá robar carta el siguiente turno, en caso de perder la ronda robas 2 cartas extra.',
    imagen: chomsCard1,
  },
  {
    id: 9,
    persona: 'Chomi',
    titulo: 'Iguales ante la Ley',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'En caso de empate robas una carta extra durante los 3 próximos turnos.',
    imagen: chomsCard2,
  },
  {
    id: 10,
    persona: 'Yurch',
    titulo: 'Jorgiña',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Copias la habilidad de la carta de tu oponente que acaba de usar este turno. Si la carta no tiene habilidad y pierdes, anulas tu racha de derrotas.',
    imagen: jorgeCard1,
  },
  {
    id: 11,
    persona: 'Yurch',
    titulo: 'Como Pez en el Agua',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Anulas cualquier carta trampa que tu oponente pueda activar esta ronda, no se puede cancelar su efecto.',
    imagen: jorgeCard2,
  },
  {
    id: 12,
    persona: 'Jason',
    titulo: 'Vigorizador',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/sh.svg',
    habilidad:
      'Duplica el efecto de tu siguiente carta de Desafío si tu habilidad se activa primero y no empatas esta ronda, permanecerá en la mesa hasta que se aplique su efecto.',
    imagen: jacoCard2,
  },
  {
    id: 13,
    persona: 'Alexito',
    titulo: 'ALL-IN',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Si ganas este turno, subes 2 escalones; si pierdes, bajas uno. Se resetea la racha de victorias o derrotas.',
    imagen: alexitoCard1,
  },
  {
    id: 14,
    persona: 'Alexito',
    titulo: 'Ratatata',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Puedes desafiar a dos oponentes diferentes en este turno. Juega una carta de desafío contra cada uno y resuelve los enfrentamientos por separado. Si ganas ambos enfrentamientos, subes 1 escalón. Tu racha de victorias no se ve afectada.',
    imagen: alexitoCard2,
  },
  {
    id: 15,
    persona: 'MagnumZRare',
    titulo: 'Felix, Maestro del caos',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/pz.svg',
    habilidad:
      'Obligas a intercambiar las cartas de la mano de tu oponente con las tuyas al final del turno, el intercambio será equivalente al número de cartas del jugador que tenga menos, si ganas puedes hacer un intercambio completo, independientemente de la diferencia de cartas entre ambos.',
    imagen: zCard1,
  },
  {
    id: 16,
    persona: 'MagnumZRare',
    titulo: 'El poder del cabello nasal',
    tipo: 'https://masteringruneterra.com/wp-content/plugins/deck-viewer/assets/images/factions/bc.svg',
    habilidad:
      'Elige una carta de tu oponente de forma aleatoria, si es una carta trampa, la descartas y ganas el turno. Si ya ganabas, sumas un punto extra a la racha.',
    imagen: zCard2,
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
