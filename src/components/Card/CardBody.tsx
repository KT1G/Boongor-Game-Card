import { Carta } from '../../data/cartas'
import BorderBottom from '../Comun/BorderBottom'
import { description, descriptionTittle, descriptionText } from './Card.css'

interface Props {
  title?: Carta['title']
  ability?: Carta['ability']
  isEpic?: Carta['isEpic']
}

const CardBody = ({ title = '', ability = '', isEpic }: Props) => {
  const colorTitleWhenEpic = isEpic != null ? '#ffefaa' : ''
  return (
    <section className={description}>
      <h3
        style={{
          color: colorTitleWhenEpic,
        }}
        className={descriptionTittle}
      >
        {title}
      </h3>
      {title !== '' && <BorderBottom />}
      <p className={descriptionText}>{ability}</p>
    </section>
  )
}

export default CardBody
