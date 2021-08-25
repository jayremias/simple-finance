import { SiCashapp } from 'react-icons/si';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="logo">
          <SiCashapp /> SimpleFinance
        </div>
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}