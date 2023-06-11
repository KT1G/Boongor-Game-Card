import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CardsWithAbility from './components/Card/CardsWithAbility'
import CardBasic from './components/Card/CardBasic'
import CardsTrap from './components/Card/CardsTrap'
import Header from './components/Header'
import { CardType } from './data/cartas'

import {
  main,
  buttonsSwitch,
  containersCardAnimated,
  borderButtons,
  containerButtons,
} from './css/main.css'

function App() {
  const [displayMode, setDisplayMode] = useState<CardType>('basic')

  const handleButtonClick = (mode: CardType) => {
    if (displayMode !== mode) {
      setDisplayMode(mode)
    }
  }
  return (
    <>
      <Header />
      <main className={main}>
        <div className={containerButtons}>
          <button
            className={buttonsSwitch}
            type='button'
            disabled={displayMode === 'basic'}
            onClick={() => handleButtonClick('basic')}
          >
            BASIC
          </button>
          <button
            className={buttonsSwitch}
            type='button'
            disabled={displayMode === 'habilidad'}
            onClick={() => handleButtonClick('habilidad')}
          >
            ABILITY
          </button>
          <button
            className={buttonsSwitch}
            type='button'
            disabled={displayMode === 'trap'}
            onClick={() => handleButtonClick('trap')}
          >
            TRAP
          </button>
        </div>
        <div className={borderButtons} />
        <AnimatePresence mode='wait'>
          {displayMode === 'basic' && (
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
          {displayMode === 'habilidad' && (
            <motion.div
              key='ability'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={containersCardAnimated}
            >
              <CardsWithAbility />
            </motion.div>
          )}
          {displayMode === 'trap' && (
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
