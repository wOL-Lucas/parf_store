import styled from 'styled-components';
import Header from '../../components/header/index';
import LoginInputs from '../../components/loginInputs/index';



const Container = styled.div`;
  background-repeat: no-repeat;

  height: 100vh;
`;



const Login = () => {
    return (
        <Container>
            <Header />
            <LoginInputs />
        </Container>
    );
};

export default Login;