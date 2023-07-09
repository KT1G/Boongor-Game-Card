import { CardTypeEnum, Carta } from '../../data/cartas'
import { image, imageBasic } from './Card.css'

interface Props {
  carta: Carta
}

const CardBack = ({ carta }: Props) => {
  const cssImage = carta.cartaTipo === CardTypeEnum.BASIC ? imageBasic : image

  return (
    <div className='cardBack'>
      <img
        alt={carta.name}
        className={cssImage}
        src={carta.imagenReal != null ? carta.imagenReal : carta.imagen}
      />
    </div>
  )
}

export default CardBack
