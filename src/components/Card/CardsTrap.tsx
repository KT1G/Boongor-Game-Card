import Card from './Card'
import { Carta, cartasTrampa } from '../../data/cartas'

const CardsTrap = () => {
  return (
    <>
      {cartasTrampa.map((card: Carta) => {
        return <Card key={card.id} carta={card} />
      })}
    </>
  )
}

export default CardsTrap
