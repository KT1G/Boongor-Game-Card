
import Card from './Card'
import { Carta, cartasPuntos } from '../../data/cartas'

const CardPoints = () => {
  return (
    <>
      {cartasPuntos.map((card: Carta) => {
        return <Card key={card.id} carta={card} />
      })}
    </>
  )
}

export default CardPoints
