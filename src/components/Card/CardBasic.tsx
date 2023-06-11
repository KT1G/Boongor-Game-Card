import Card from '../../components/Card/Card'
import { Carta, cartasSinHabilidad } from '../../data/cartas'

const CardsWithAbility = () => {
  return (
    <>
      {cartasSinHabilidad.map((card: Carta) => {
        return <Card key={card.id} carta={card} />
      })}
    </>
  )
}

export default CardsWithAbility
