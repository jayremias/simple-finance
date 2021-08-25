import { Container } from "./styles";

export function TransactionsTable() {
  return <Container>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Construção de WebSite</td>
          <td className="deposit">R$12.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/02/2020</td>
        </tr>
        <tr>
          <td>Construção de WebSite</td>
          <td className="withdraw">R$-12.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/02/2020</td>
        </tr>
        <tr>
          <td>Construção de WebSite</td>
          <td>R$12.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/02/2020</td>
        </tr>
        <tr>
          <td>Construção de WebSite</td>
          <td>R$12.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/02/2020</td>
        </tr>
        <tr>
          <td>Construção de WebSite</td>
          <td>R$12.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/02/2020</td>
        </tr>
      </tbody>
    </table>
  </Container>;
}
