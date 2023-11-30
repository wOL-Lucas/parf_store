import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';


const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;

`;

const Container = styled.div`
    margin-top: 5vh;
    width: 70vw;
    transition: 0.4s ease-in-out;
    display: flex;
    flex-direction: column;

    font-family: 'Roboto', sans-serif;
`;

const SummaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #f0f0f0;
`;

const ScrollableProducts = styled.div`
    max-height: 80vh; 
    overflow-y: auto;
    flex: 1;
`;

const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: linear-gradient(0deg, #ff00ea 0%,  #fe5d7d 100%);
`;

const ProductImage = styled.img`
    width: 100px; 
    height: auto;
    margin-right: 10px;
`;

const Stock = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const token = Cookies.get('_auth');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            try {
                const response = await axios.get('http://localhost:8080/api/v1/products', {
                    headers,
                });

                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
                window.location.href = '/login';
            }
        };

        fetchProducts();
    }, []);

    const totalStockQuantity = products.reduce((total, product) => total + product.stock_quantity, 0);
    const totalStockValue = products.reduce((total, product) => total + product.price * product.stock_quantity, 0);

    return (
        <CenterContainer>
        <Container>
            <SummaryContainer>
                <div>
                    <h1>Total de produtos em estoque</h1>
                    <p>{totalStockQuantity}</p>
                </div>
                <div>
                    <h1>Valor total do estoque</h1>
                    <p>{totalStockValue.toFixed(2)}</p>
                </div>
            </SummaryContainer>
            <ScrollableProducts>
                {products.map((product) => (
                    <ProductContainer key={product.product_id}>
                        <ProductImage src={product.image_url} alt="Product" />
                        <div>
                            <p>Name: {product.product_name}</p>
                            <p>Category: {product.category}</p>
                            <p>Brand: {product.brand}</p>
                            <p>Price: {product.price}</p>
                            <p>Description: {product.description}</p>
                            <p>Stock Quantity: {product.stock_quantity}</p>
                        </div>
                    </ProductContainer>
                ))}
            </ScrollableProducts>
        </Container>
        </CenterContainer>
    );
};

export default Stock;
