import React, { useState } from 'react';
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

const TextInputField = styled.input`
    height: 2em;
    width: 15em;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 5px;
    font-size: 1em;
    margin-bottom: 1em;
    background: linear-gradient(0deg, #ff00ea 0%, #fe5d7d 100%);
    &::placeholder {
    color: white;
}
`;

const SubmitButton = styled.button`
    height: 2em;
    width: 10em;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 5px;
    font-size: 1em;
    margin-bottom: 1em;
    background: #ff00ea;
    background-color: #red;
    font-family: arial, sans-serif;
    transition: 0.2s;
    &:hover {
    transform: scale(1.1);
    cursor: pointer;
    }
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const RegisterStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
`;

const Status = ({ registrationStatus }) => {
    return (
        <RegisterStatus>
            <p>{registrationStatus}</p>
        </RegisterStatus>
    );
};


const RegisterProduct = () => {
    const [productData, setProductData] = useState({
        product_name: '',
        category: '',
        brand: '',
        price: '',
        description: '',
        stock_quantity: '',
    });

    const [registrationStatus, setRegistrationStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        const newValue = name === 'price' ? parseFloat(value) || 'teste' : value;

        setProductData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const token = Cookies.get('_auth');


        const headers = {
            Authorization: `Bearer ${token}`,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/v1/products', productData, {
                headers,
            });
            console.log(response);
            handleRegisterSuccess();


        } catch (error) {
            console.error('Error creating product', error);
            setRegistrationStatus('Erro ao registrar produto');
            setTimeout(() => {
                setRegistrationStatus('');
            }, 3000);
        }
    };

    const handleRegisterSuccess = () => {
        setProductData({
            product_name: '',
            category: '',
            brand: '',
            price: '',
            description: '',
            stock_quantity: '',
        });
        setRegistrationStatus('Produto cadastrado com sucesso');
        setTimeout(() => {
            setRegistrationStatus('');
        }, 3000);
    };



    return (
        <Container>
            <Status registrationStatus={registrationStatus}/>

            <DisplayContainer>
                <FormContainer onSubmit={handleSubmit}>
                    <TextInputField
                        type="text"
                        name="product_name"
                        placeholder="Nome do produto"
                        value={productData.product_name}
                        onChange={handleChange}
                    />
                    <TextInputField
                        type="text"
                        name="category"
                        placeholder="Categoria"
                        value={productData.category}
                        onChange={handleChange}
                    />
                    <TextInputField
                        type="text"
                        name="brand"
                        placeholder="Marca"
                        value={productData.brand}
                        onChange={handleChange}
                    />
                    <TextInputField
                        type="text"
                        name="price"
                        placeholder="Preço"
                        value={productData.price}
                        onChange={handleChange}
                    />
                    <TextInputField
                        type="text"
                        name="description"
                        placeholder="Descrição"
                        value={productData.description}
                        onChange={handleChange}
                    />
                    <TextInputField
                        type="text"
                        name="stock_quantity"
                        placeholder="Quantidade"
                        value={productData.stock_quantity}
                        onChange={handleChange}
                    />
                    <SubmitButton type="submit">Registrar produto</SubmitButton>
                </FormContainer>
            </DisplayContainer>
        </Container>
    );
};

export default RegisterProduct;
