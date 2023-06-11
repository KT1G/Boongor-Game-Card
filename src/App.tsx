import Header from './components/Header'
import Card from './components/Card'
import { main } from './css/main.css'
import { Carta, cartas } from './data/cartas'

function App() {
  return (
    <>
      <Header />
      <main className={main}>
        {cartas.map((card: Carta) => {
          return <Card key={card.id} carta={card} />
        })}
      </main>
    </>
  )
}

export default App
