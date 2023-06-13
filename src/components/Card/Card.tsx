import { CardTypeEnum, Carta } from '../../data/cartas'
import { card, image, imageBasic } from './Card.css'
import CardBody from './CardBody'
import CardHeader from './CardHeader'

interface Props {
  carta: Carta
}

const Card = ({ carta }: Props) => {
  const cssImage = carta.cartaTipo === CardTypeEnum.BASIC ? imageBasic : image
  const borderColorWhenEpic = carta.isEpic != null ? '7px solid #ffefaa' : ''
  const backgroundColorWhenEpic = carta.isEpic != null ? '#ffefaa' : ''

  return (
    <article
      style={{
        border: borderColorWhenEpic,
        background: backgroundColorWhenEpic,
      }}
      className={card}
    >
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
    </article>
  )
}

export default Card
