import styled from 'styled-components';
import Expand from '../../images/expand.png'
import Retract from '../../images/retract.png'

const ButtonContainer = styled.button`
    border: none;
    width: 30px;
    height: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10px;
    margin-top: 5px;

    box-shadow: 1px 1px 1px black;
    border-radius: 10px 0px 10px 0px;

    background: linear-gradient(0deg, #ff00ea 0%,  #fe5d7d 100%);

    transform: ${props => (props.$retracted ? 'translateX(-30%)' : 'translateX(0)')};
    transition: 0.1s ease-in-out;
`;

const ItemLogo = styled.img`
    align-self: center;
    justify-content: left;
    width: 20px;
    height: 20px;
    padding: 25px;

    transform: ${props => (props.$retracted ? 'rotate(180deg)' : 'rotate(0deg)')};

`;

const HideButton = ({state, alterState}) => {
    return(
        <ButtonContainer onClick={alterState} $retracted={state === 'retracted'}>
            <ItemLogo src={Retract} alt="Retract" $retracted={state === 'retracted'}/>
        </ButtonContainer>
    )
};

export default HideButton;