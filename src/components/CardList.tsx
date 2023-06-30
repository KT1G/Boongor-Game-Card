import { motion, AnimatePresence } from 'framer-motion'
import CardBasic from '../components/Card/CardBasic'
import { buttons } from '../constants/constants'
import Rules from './Rules'
import CardsWithAbility from './Card/CardsWithAbility'
import CardsTrap from './Card/CardsTrap'
import CardPoints from './Card/CardPoints'
import { containersCardAnimated } from '../css/main.css'
import { CardType } from '../data/cartas'

interface Props {
  transitionEnds: () => void
  displayMode: CardType
}

export const CardList = ({ transitionEnds, displayMode }: Props) => {
  const renders = {
    RULES: <Rules />,
    BASIC: <CardBasic />,
    ABILITY: <CardsWithAbility />,
    TRAP: <CardsTrap />,
    POINT: <CardPoints />,
  }
  return (
    <AnimatePresence mode='wait' onExitComplete={transitionEnds}>
      {buttons.map(button => {
        return (
          displayMode === button && (
            <motion.div
              key={button}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={containersCardAnimated}
            >
              {renders[button]}
            </motion.div>
          )
        )
      })}
    </AnimatePresence>
  )
}
