import { rules } from './Rules.css'

const Rules = () => {
  return (
    <section className={rules}>
      <h1>Reglas del juego: "Boong"</h1>

      <h2>1. Objetivo principal:</h2>
      <p>
        El juego consiste en subir un total de 8 escalones para ganar la
        partida. Los escalones se suben ganando enfrentamientos contra los
        rivales. Cada vez que ganes 3 rondas seguidas, subirás un escalón. Sin
        embargo, si pierdes 3 rondas seguidas, bajarás un escalón.
      </p>

      <h2>2. Tipos de cartas:</h2>
      <p>- Luz (LIGHT): Vence a las cartas de Sombra (Shadow).</p>
      <p>- Sombra (SHADOW): Vence a las cartas de Escalones (Stairs).</p>
      <p>- Escalones (STAIRS): Vence a las cartas de Luz (Light).</p>

      <h2>3. Tipos de carta:</h2>
      <p>
        - Carta desafío estándar: No posee habilidades y puede ser de cualquiera
        de los 3 tipos (Luz, Sombra o Escalones).
      </p>
      <p>
        - Carta desafío con habilidad: Posee una habilidad especial y también
        pertenece a uno de los 3 tipos (Luz, Sombra o Escalones).
      </p>
      <p>- Carta trampa:</p>
      <ul>
        <li>
          <span>Instantánea</span>: Se activan al robarlas del mazo.
        </li>
        <li>
          <span>libre</span>: Se puede usar en cualquier momento de tu turno o
          cuando te desafien.
        </li>
      </ul>

      <h2>4. Inicio del juego:</h2>
      <p>- Cada jugador comienza con 3 cartas en la mano.</p>
      <p>
        - Los jugadores siempre deberán tener como mínimo una carta de desafío,
        en caso de no tener, robará hasta que le salga una, y devolverá el resto
        a la parte inferior del mazo.
      </p>
      <p>
        - Al finalizar el turno de cada jugador, se deben robar cartas hasta
        tener un mínimo de 3 en la mano.
      </p>
      <p>- Los jugadores tienen un límite máximo de 7 cartas en la mano.</p>

      <h2>5. Desarrollo del turno:</h2>
      <p>
        - Al comienzo del turno de un jugador este debe retar a uno de los otros
        jugadores. Puede retar a cualquier jugador, incluso si alguien ya ha
        retado a ese jugador.
      </p>
      <p>
        - Durante un enfrentamiento, ambos jugadores deben jugar una carta de
        desafío, ya sea con o sin habilidad, y pueden usar una carta trampa si
        lo desean.
      </p>
      <p>
        - En caso de duda sobre la activación de la habilidad de una carta,
        siempre se activará primero la habilidad del retador.
      </p>
      <p>- En caso de empate, no cuenta para la racha.</p>
      <p>- En caso de empate, no cuenta para la racha.</p>

      <p>
        - Cada vez que un jugador gane o pierda una ronda, la carta con la que
        jugó permanecerá en la mesa para indicar que el jugador está en racha.
        Cuando la racha se cancele, las cartas se devolverán a la parte inferior
        del mazo. (opcional)
      </p>
    </section>
  )
}

export default Rules
