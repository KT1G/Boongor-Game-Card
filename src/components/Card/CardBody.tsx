import { Carta } from '../../data/cartas'
import { description, descriptionTittle, descriptionText } from './Card.css'

interface Props {
  title?: Carta['titulo']
  ability?: Carta['habilidad']
}

const CardBody = ({ title = "", ability = "" }: Props) => {
  return (
    <section className={description}>
      <h3 className={descriptionTittle}>{title}</h3>
      <p className={descriptionText}>{ability}</p>
    </section>
  )
}

export default CardBody
