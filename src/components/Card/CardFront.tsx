import { CardTypeEnum, Carta } from '../../data/cartas'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import { image, imageBasic } from './Card.css'

interface Props {
  carta: Carta
}

const CardFront = ({ carta }: Props) => {
  const cssImage = carta.cartaTipo === CardTypeEnum.BASIC ? imageBasic : image
  const cssNoShadow =
    carta.cartaTipo === CardTypeEnum.BASIC ||
    carta.cartaTipo === CardTypeEnum.POINT

  return (
    <div className={`cardFront ${cssNoShadow ? 'noShadow' : ''}`}>
      <CardHeader
        name={carta.name}
        typeDamage={carta.tipo}
        type={carta.cartaTipo}
        instantanea={carta.instantanea}
      />
      <CardBody
        title={carta.title}
        ability={carta.ability}
        isEpic={carta.isEpic}
      />
      <img alt={carta.name} className={cssImage} src={carta.imagen} />
    </div>
  )
}

export default CardFront
