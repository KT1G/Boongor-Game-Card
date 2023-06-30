import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import { main, containerButtons } from './css/main.css'
import { CardType, CardTypeEnum } from './data/cartas'
import BorderBottom from './components/Comun/BorderBottom'
import { CardList } from './components/CardList'
import ButtonsList from './components/nav/ButtonsList'

function App() {
  const [displayMode, setDisplayMode] = useState<CardType>(CardTypeEnum.ABILITY)
  const [animationInProgress, setEffectInProgress] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  const handleButtonClick = (mode: CardType) => {
    if (displayMode !== mode) {
      setEffectInProgress(true)
      setDisplayMode(mode)
    }
  }
  const handleCheckboxClick = (event: any) => {
    setMenuOpen(!isMenuOpen)
    event.stopPropagation()
  }
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement
      if (
        sidebarRef.current !== null &&
        sidebarRef.current !== undefined &&
        !sidebarRef.current.contains(event.target as Node) &&
        targetElement.tagName !== 'LABEL'
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [sidebarRef])

  const transitionEnds = () => {
    setEffectInProgress(false)
  }

  console.log(isMenuOpen)

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

        <label className='hamburgerMenu'>
          <input
            type='checkbox'
            checked={isMenuOpen}
            onClick={handleCheckboxClick}
          />
        </label>
        <aside className='sidebar' ref={sidebarRef}>
          <div className='navBarMobile'>
            <ButtonsList
              handleClick={handleButtonClick}
              displayMode={displayMode}
              animationInProgress={animationInProgress}
            />
          </div>
        </aside>

        <CardList transitionEnds={transitionEnds} displayMode={displayMode} />
      </main>
    </>
  )
}

export default App
