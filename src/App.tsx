import { useState } from 'react'
import Header from './components/Header'
import { CardType, CardTypeEnum } from './data/cartas'
import { main, containerButtons } from './css/main.css'
import BorderBottom from './components/Comun/BorderBottom'
import { CardList } from './components/CardList'
import ButtonsList from './components/nav/ButtonsList'

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
            handleClick={handleButtonClick}
            displayMode={displayMode}
            animationInProgress={animationInProgress}
          />
        </div>
        <BorderBottom />
        <CardList transitionEnds={transitionEnds} displayMode={displayMode} />
      </main>
    </>
  )
}

export default App
