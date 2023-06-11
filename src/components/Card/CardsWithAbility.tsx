import Card from '../../components/Card/Card'
import { Carta, cartasConHabilidad } from '../../data/cartas'

const CardsWithAbility = () => {
  return (
    <>
      {cartasConHabilidad.map((card: Carta) => {
        return <Card key={card.id} carta={card} />
      })}
    </>
  )
}

export default CardsWithAbility
