import { Container } from "./styles";
import { GiReceiveMoney, GiPayMoney, GiTakeMyMoney } from 'react-icons/gi'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <GiReceiveMoney color="var(--green)"/>
        </header> 
        <strong>
          R$1.000,00
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <GiPayMoney color="var(--red)"/>
        </header> 
        <strong>
          - R$500,00
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <GiTakeMyMoney color="var(--white)"/>
        </header> 
        <strong>
          R$500,00
        </strong>
      </div>
    </Container>
  )
}