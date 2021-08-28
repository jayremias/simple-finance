import { createContext, useEffect, useState, ReactNode } from "react";
import { Api } from "./services/Api";

interface Transaction {
  id: string;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(
    transactionInput: TransactionInput
  ): Promise<void> {
    try {
      const response = await Api.post("/transactions", transactionInput);
      const transaction = response.data;
      setTransactions([...transactions, transaction]);
    } catch (error) {}
  }

  useEffect(() => {
    Api.get("http://localhost:3001/api/transactions")
      .then(({ data }) => {
        setTransactions(data.transactions);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
