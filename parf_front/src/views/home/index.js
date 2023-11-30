import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';

const Container = styled.div`
  width: 100vw;
  transition: 0.4s ease-in-out;
`;

const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

const StockValueContainer = styled.div`
  margin: 36px;
  font-family: 'Roboto', sans-serif;
`;

const LastSalesContainer = styled.div`
  margin: 36px;
  font-family: 'Roboto', sans-serif;
`;

const TodayTotalIncomeContainer = styled.div`
  margin: 36px;
  font-family: 'Roboto', sans-serif;
`;

const TodayTotalIncome = () => {
  return (
    <TodayTotalIncomeContainer>
      <h1>Valor total de vendas hoje</h1>
      <h2>R$ 0,00</h2>
    </TodayTotalIncomeContainer>
  );
};

const LastSales = () => {
  return (
    <LastSalesContainer>
      <h1>Últimas vendas</h1>
      <h2>Nenhuma venda registrada</h2>
    </LastSalesContainer>
  );
};

const StockValue = ({ products }) => {
  return (
    <StockValueContainer>
      <h1>Valor do estoque atual</h1>
      <h2>R$ {calculateStockValue(products).toFixed(2)}</h2>
    </StockValueContainer>
  );
};

const calculateStockValue = (products) => {
  return products.reduce((total, product) => total + product.price * product.stock_quantity, 0);
};

const Display = ({ products }) => {
  return (
    <DisplayContainer>
      <StockValue products={products} />
      <LastSales />
      <TodayTotalIncome />
    </DisplayContainer>
  );
};

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = Cookies.get('_auth');
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('http://localhost:8080/api/v1/products', {
          headers,
        });

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Display products={products} />
    </Container>
  );
};

export default Home;
