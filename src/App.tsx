import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CardsWithAbility from './components/Card/CardsWithAbility'
import CardBasic from './components/Card/CardBasic'
import Header from './components/Header'

import {
  main,
  buttonsSwitch,
  containersCardAnimated,
  borderButtons,
  containerButtons,
} from './css/main.css'

function App() {
  const [displayMode, setDisplayMode] = useState<'basic' | 'ability'>('basic')

  const handleBasicButtonClick = () => {
    if (displayMode !== 'basic') {
      setDisplayMode('basic')
    }
  }

  const handleAbilityButtonClick = () => {
    if (displayMode !== 'ability') {
      setDisplayMode('ability')
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
            onClick={handleBasicButtonClick}
          >
            BASIC
          </button>
          <button
            className={buttonsSwitch}
            type='button'
            disabled={displayMode === 'ability'}
            onClick={handleAbilityButtonClick}
          >
            ABILITY
          </button>
        </div>
        <div className={borderButtons} />
        <AnimatePresence mode='wait'>
          {displayMode === 'basic' ? (
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
          ) : (
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
        </AnimatePresence>
      </main>
    </>
  )
}

export default App
