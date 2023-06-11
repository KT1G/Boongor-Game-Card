import { Carta } from '../../data/cartas'
import { card, image, imageBasic} from './Card.css'
import CardBody from './CardBody'
import CardHeader from './CardHeader'

interface Props {
  carta: Carta
}

const Card = ({ carta }: Props) => {
  const cssImage = carta.cartaTipo === 'basic' ? imageBasic : image
  return (
    <article className={card}>
      <CardHeader
        name={carta.name}
        typeDamage={carta.tipo}
        type={carta.cartaTipo}
      />
      <CardBody title={carta.titulo} ability={carta.habilidad} />

      <img className={cssImage} src={carta.imagen} />
    </article>
  )
}

export default Card
