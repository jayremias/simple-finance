import { Container } from "./styles";
import { GiReceiveMoney, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  function formatCurrency(amount: number) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <GiReceiveMoney color="var(--green)" />
        </header>
        <strong>{formatCurrency(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <GiPayMoney color="var(--red)" />
        </header>
        <strong>{formatCurrency(summary.withdraws)}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <GiTakeMyMoney color="var(--white)" />
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  );
}
