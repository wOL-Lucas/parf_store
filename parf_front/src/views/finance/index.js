import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Container = styled.div`
  width: 100vw;
  transition: 0.4s ease-in-out;
`;

const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

const TotalTodayOutcomeContainer = styled.div`
  margin: 36px;
  font-family: 'Roboto', sans-serif;
`;

const TotalAccountCreditContainer = styled.div`
  margin: 36px;
  font-family: 'Roboto', sans-serif;
`;

const TransactionCard = styled.div`
  margin: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f0f0f0;
  width: 300px;
`;

const ScrollableDetailDiv = styled.div`
  max-height: 55vh;
  overflow-y: auto;
`;

const Finance = () => {
  const [totalTodayOutcome, setTotalTodayOutcome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [accountInfo, setAccountInfo] = useState({ accountNumber: '000000-0', balance: 'R$ 0,00', limit: 'R$ 0,00' });

  // Fetch account information and transactions on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = '1301865f-c6bc-38f3-9f49-666dbcfc59c3'; // Replace with your token
        const clientId = '9b5e603e428cc477a2841e2683c92d21'; // Replace with your client_id

        // Fetch balance from the new API
        const balanceResponse = await fetch('https://sandbox.sicoob.com.br/sicoob/sandbox/conta-corrente/v2/saldo', {
          headers: {
            client_id: clientId,
            Authorization: `Bearer ${token}`,
          },
        });

        const balanceData = await balanceResponse.json();

        // Fetch transactions from the previous API
        const transactionsResponse = await fetch('https://sandbox.sicoob.com.br/sicoob/sandbox/conta-corrente/v2/extrato/11/2023', {
          headers: {
            client_id: clientId,
            Authorization: `Bearer ${token}`,
          },
        });

        const transactionsData = await transactionsResponse.json();

        // Update state with fetched data
        const totalValue = transactionsData.resultado.transacoes.reduce((total, transaction) => total + transaction.valor, 0);
        setTotalTodayOutcome(totalValue.toFixed(2));
        setTransactions(transactionsData.resultado.transacoes);
        setAccountInfo({
          accountNumber: '000000-0',
          balance: `R$ ${balanceData.resultado.saldo.toFixed(2)}`,
          limit: `R$ ${balanceData.resultado.saldoLimite.toFixed(2)}`,
        });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  // Create current date
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <Container>
      <DisplayContainer>
        <TotalAccountCreditContainer>
          <h1>Saldo Atual na conta {accountInfo.accountNumber}</h1>
          <h2>{accountInfo.balance}</h2>
        </TotalAccountCreditContainer>
        <TotalTodayOutcomeContainer>
          <h1>Gasto total em {currentDate}</h1>
          <h2>R$ {totalTodayOutcome}</h2>
          <h3>Limite de Saldo: {accountInfo.limit}</h3>
          <ScrollableDetailDiv>
            {transactions.map((transaction, index) => (
              <TransactionCard key={index}>
                <p>Tipo: {transaction.tipo}</p>
                <p>Valor: R$ {transaction.valor.toFixed(2)}</p>
                <p>Data: {new Date(transaction.data).toLocaleDateString('pt-BR')}</p>
                <p>Descrição: {transaction.descricao}</p>
              </TransactionCard>
            ))}
          </ScrollableDetailDiv>
        </TotalTodayOutcomeContainer>
      </DisplayContainer>
    </Container>
  );
};

export default Finance;
