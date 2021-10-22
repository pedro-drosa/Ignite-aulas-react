import { useEffect, useState, useContext } from "react";

import { TransactionsContext } from "../../TransactionsContext";
import { api } from '../../services/api';
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const data = useContext(TransactionsContext)
  
  useEffect(()=>{
    api.get('transactions')
    .then(response => setTransactions((response.data.transactions)))
  },[]);

  return(
    <Container>
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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-Br').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}