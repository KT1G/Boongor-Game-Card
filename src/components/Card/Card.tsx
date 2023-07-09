import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Carta } from '../../data/cartas'
import CardFront from './CardFront'
import CardBack from './CardBack'
import { card } from './Card.css'

interface Props {
  carta: Carta
}

const Card = ({ carta }: Props) => {
  const [selectedCard, setSelectedCard] = useState(false)
  const [timeoutId, setTimeoutId] = useState<number | null>(null)


  useEffect(() => {
    return () => {
      // Limpiar el temporizador cuando el componente se desmonte
      if (timeoutId != null) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  const handleCardClick = () => {
    setSelectedCard(!selectedCard) // Aquí puedes modificar la lógica para seleccionar la carta según tus necesidades
    if (timeoutId != null) {
      clearTimeout(timeoutId)
    }
    const timeout = setTimeout(() => {
      setSelectedCard(false)
    }, 3000)

    setTimeoutId(timeout)
  }

  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      onClick={handleCardClick} // Añade el evento onClick para seleccionar la carta al hacer clic
      className={`${card} ${selectedCard ? 'flipped' : ''}`}
    >
      <div className="cardContent" >
        <CardFront carta={carta} />
        <CardBack carta={carta} />
      </div>
    </motion.article>
  )
}
export default Card
