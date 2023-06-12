import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CardsWithAbility from './components/Card/CardsWithAbility'
import CardBasic from './components/Card/CardBasic'
import CardsTrap from './components/Card/CardsTrap'
import Header from './components/Header'
import { CardType, CardTypeEnum } from './data/cartas'

import {
  main,
  containersCardAnimated,
  containerButtons,
} from './css/main.css'
import BorderBottom from './components/Comun/BorderBottom'
import Rules from './components/Rules'
import ButtonsList from './components/ButtonsList'

function App() {
  const [displayMode, setDisplayMode] = useState<CardType>(CardTypeEnum.ABILITY)
  const [animationInProgress, setEffectInProgress] = useState(false)

  const handleButtonClick = (mode: CardType) => {
    if (displayMode !== mode) {
      setEffectInProgress(true)
      setDisplayMode(mode)
    }
  }

  const transitionEnds = () => {
    setEffectInProgress(false)
  }
  return (
    <>
      <Header />
      <main className={main}>
        <div className={containerButtons}>
          <ButtonsList
            handleButtonClick={handleButtonClick}
            displayMode={displayMode}
            animationInProgress={animationInProgress}
          />
        </div>
        <BorderBottom />
        <AnimatePresence mode='wait' onExitComplete={transitionEnds}>
          {displayMode === CardTypeEnum.RULES && (
            <motion.div
              key='rules'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={containersCardAnimated}
            >
              <Rules />
            </motion.div>
          )}
          {displayMode === CardTypeEnum.BASIC && (
            <motion.div
              key='basic'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={containersCardAnimated}
            >
              <CardBasic />
            </motion.div>
          )}
          {displayMode === CardTypeEnum.ABILITY && (
            <motion.div
              key='habilidad'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={containersCardAnimated}
            >
              <CardsWithAbility />
            </motion.div>
          )}
          {displayMode === CardTypeEnum.TRAP && (
            <motion.div
              key='trap'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={containersCardAnimated}
            >
              <CardsTrap />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}

export default App
