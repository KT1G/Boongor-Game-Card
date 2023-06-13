import { buttons } from '../../constants/constants'
import { buttonsSwitch, buttonSelected } from '../../css/main.css'
import { CardType } from '../../data/cartas'

interface Props {
  handleClick: (mode: CardType) => void
  displayMode: CardType
  animationInProgress: boolean
}

const ButtonsList = ({
  handleClick,
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
        onClick={() => handleClick(button as CardType)}
      >
        {button}
      </button>
    )
  })
}

export default ButtonsList
