import { Carta } from '../../data/cartas'
import {
  header,
  containerPersona,
  tipo,
  tipoDamageWithAbility,
  tipoDamageWithNoAbility,
  titlePersona,
} from './Card.css'

interface Props {
  name?: Carta['name']
  typeDamage?: Carta['tipo']
  type: Carta['cartaTipo']
}

const CardHeader = ({ name, typeDamage, type }: Props) => {
  const cssTipoImage =
    type === 'habilidad' ? tipoDamageWithAbility : tipoDamageWithNoAbility
  const isBasicCard = type === 'basic'
  return (
    <header className={header}>
      {!isBasicCard && (
        <div className={containerPersona}>
          <p className={titlePersona}>{name}</p>         
        </div>
      )}
      <div className={tipo}>
        {typeDamage != null && (
          <img className={cssTipoImage} src={typeDamage} />
        )}
      </div>
    </header>
  )
}

export default CardHeader
