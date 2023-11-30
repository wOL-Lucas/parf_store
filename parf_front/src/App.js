import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/index';
import styled from 'styled-components';
import Sidebar from './components/sidebar/index';
import HideButton from './components/hide-button/index';
import { RequireAuth } from 'react-auth-kit'; // Import RequireAuth from the correct location

const Container = styled.div`
  background-image: linear-gradient(to bottom, #c9c9c9,#ffffffc9 ,#ffffff88,rgba(255, 255, 255, 0.986));
  background-repeat: no-repeat;

  height: 100vh;
`;

const Display = styled.div`
  display: flex;
`;

const App = () => {
  const [state, setState] = useState('extended');

  const alterState = () => {
    setState(prevState => (prevState === 'extended' ? 'retracted' : 'extended'));
  };

  return (
    <RequireAuth loginPath="/login"> {/* Wrap the entire content with RequireAuth */}
      <Container>
        <Header />
          <Display>
              <Sidebar state={state} alterState={alterState} />
              <HideButton state={state} alterState={alterState} />
              <Outlet state={state} alterState={alterState}/>
          </Display>
      </Container>
    </RequireAuth>
  );
};

export default App;
