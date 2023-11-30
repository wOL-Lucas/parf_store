import Logo from '../Logo/index'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyles'

const HeaderContainer = styled.header`
    background: linear-gradient(0deg, #ff00ea 0%,  #fe5d7d 100%);
    width: 100vw;
    height: 5em;

    padding: 0.5em 0 0.5em 0.5em;

    box-shadow: 1px 1px 10px black;
    display: inline-block;
`;

const LogoLeft = styled.div`
    display: flex;
    justify-content: left;
    height: 100%;
    width: 100%;
`;

const Header = () =>{
    return (
        <HeaderContainer>
            <LogoLeft>
                <Logo/>
            </LogoLeft>
        </HeaderContainer>
    )
}

export default Header;