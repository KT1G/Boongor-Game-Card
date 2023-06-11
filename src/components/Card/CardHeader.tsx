import { Carta } from '../../data/cartas'
import {
  header,
  containerName,
  tipoContainerWithoutAbility,
  tipoDamageWithAbility,
  tipoContainerWithAbility,
  textName,
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
  const colorTrap = type === 'trap' ? 'hsl(0, 100%, 20%)' : ''
  return (
    <header className={header}>
      {!isBasicCard && (
        <div
          style={{
            background: colorTrap,
            color: 'white'
          }}
          className={containerName}
        >
          <p className={textName}>{name}</p>
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
