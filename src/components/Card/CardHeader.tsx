import { Carta } from '../../data/cartas'
import {
  header,
  containerPersona,
  tipoContainerWithoutAbility,
  tipoDamageWithAbility,
  tipoContainerWithAbility,
  titlePersona,
} from './Card.css'

interface Props {
  name?: Carta['name']
  typeDamage?: Carta['tipo']
  type: Carta['cartaTipo']
}

const CardHeader = ({ name, typeDamage, type }: Props) => {
  const cssTipoImage =
    type === 'habilidad'
      ? tipoContainerWithAbility
      : tipoContainerWithoutAbility
  const isBasicCard = type === 'basic'
  return (
    <header className={header}>
      {!isBasicCard && (
        <div className={containerPersona}>
          <p className={titlePersona}>{name}</p>
        </div>
      )}
      {typeDamage != null && (
        <div className={cssTipoImage}>
          <img className={tipoDamageWithAbility} src={typeDamage} />
        </div>
      )}
    </header>
  )
}

export default CardHeader
