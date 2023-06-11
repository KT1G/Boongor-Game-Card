import { Carta } from '../data/cartas'
import {
  card,
  image,
  header,
  containerPersona,
  tipo,
  tipoImage,
  titlePersona,
  description,
  descriptionTittle,
  descriptionText,
} from './Card.css'

interface Props {
  carta: Carta
}

const Card = ({ carta }: Props) => {
  return (
    <article className={card}>
      <header className={header}>
        <div className={containerPersona}>
          <p className={titlePersona}>{carta.persona}</p>
        </div>
        <div className={tipo}>
          <img className={tipoImage} src={carta.tipo} />
        </div>
      </header>
      <section className={description}>
        <h3 className={descriptionTittle}>{carta.titulo}</h3>
        <p className={descriptionText}>{carta.habilidad}</p>
      </section>
      <img className={image} src={carta.imagen} />
    </article>
  )
}

export default Card
