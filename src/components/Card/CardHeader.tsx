import { CardTypeEnum, Carta } from '../../data/cartas'
import {
  header,
  containerName,
  tipoContainerWithoutAbility,
  tipoDamageWithAbility,
  tipoContainerWithAbility,
  textName,
} from './Card.css'

interface Props {
  type: Carta['cartaTipo']
  name?: Carta['name']
  typeDamage?: Carta['tipo']
  instantanea?: Carta['instantanea']
}

const CardHeader = ({ name, typeDamage, type, instantanea }: Props) => {
  const cssTipoImage =
    type === CardTypeEnum.ABILITY
      ? tipoContainerWithAbility
      : tipoContainerWithoutAbility
  const isBasicCard = type === CardTypeEnum.BASIC

  const colorTrap = type === CardTypeEnum.TRAP ? 'hsl(0, 100%, 20%)' : ''
  const isInstantanea = type === CardTypeEnum.TRAP && instantanea === true

  return (
    <header className={header}>
      <div className='capture-card-header'>
        {!isBasicCard && !isInstantanea && (
          <div
            style={{
              background: colorTrap,
            }}
            className={containerName}
          >
            <p className={textName}>{name}</p>
          </div>
        )}

        {typeDamage != null && (
          <div className={cssTipoImage}>
            <img
              className={tipoDamageWithAbility}
              src={typeDamage}
              alt='tipo de la habilidad'
            />
          </div>
        )}
      </div>
    </header>
  )
}

export default CardHeader
