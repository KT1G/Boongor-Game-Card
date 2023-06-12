import { buttonsSwitch, buttonSelected } from '../css/main.css'
import { CardType } from '../data/cartas'

interface Props {
  handleButtonClick: (mode: CardType) => void
  displayMode: CardType
  animationInProgress: boolean
}

const buttons = ['RULES', 'BASIC', 'ABILITY', 'TRAP']
const ButtonsList = ({
  handleButtonClick,
  displayMode,
  animationInProgress,
}: Props) => {
  return buttons.map(button => {
    const selected = displayMode === button

    return (
      <button
        key={button}
        className={`${buttonsSwitch} ${selected ? buttonSelected : ''}`}
        type='button'
        disabled={selected || animationInProgress}
        onClick={() => handleButtonClick(button as CardType)}
      >
        {button}
      </button>
    )
  })
}

export default ButtonsList
