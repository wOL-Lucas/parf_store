import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useSignIn} from 'react-auth-kit';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const InputField = styled.input`
    height: 2em;
    width: 15em;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 5px;
    font-size: 1em;
    margin-bottom: 1em;

    background: linear-gradient(0deg, #ff00ea 0%,  #fe5d7d 100%);  

    &::placeholder{
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

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

`;

const LoginInputs = () => {
    const signIn = useSignIn();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Step 2: Handle Input Changes
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

  // Step 3: Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 4: API Request
    try {

        const body = {
            "login":username,
            "password":password,
        }

        const response = await axios.post('http://localhost:8080/auth/login', {
            "login":username,
            "password":password,
        });

        signIn({
            token: response.data.token,
            expiresIn: 7200,
            tokenType: 'Bearer',
            authState: { username: username},

        })

        if (response.data.token) {
            console.log('Login successful');
            window.location.href = '/início';
        } 
        else {
            console.error('Authentication failed');
        }
    } catch (error) {
        console.error('Error during authentication', error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <SubmitButton type="submit">Login</SubmitButton>
    </FormContainer>
  );
};

export default LoginInputs;