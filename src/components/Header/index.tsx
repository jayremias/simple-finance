import { SiCashapp } from 'react-icons/si';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {

  return (
    <Container>
      <Content>
        <div className="logo">
          <SiCashapp /> SimpleFinance
        </div>
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
        
      </Content>
    </Container>
  )
}