import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    color: white;
    align-items: center;
    text-shadow: 1px 1px 1px black;
    font-family: 'Playfair Display';

    padding-left: 1em;
`;


const Logo = () => {
    return (
        <LogoContainer>
            <h1>ParfStore</h1>
        </LogoContainer>
    )
};

export default Logo;