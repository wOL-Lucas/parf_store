import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    color: #red;

    width: 100vw;
    height: 60vh;

    justify-content: center;
    align-items: center;

    font-family: 'Bebas Neue', Montserrat, sans-serif;
`;

const Error = () => {
    return (
        <Container>
            <h1>404 - Não encontrado</h1>
        </Container>
    );
};

export default Error;