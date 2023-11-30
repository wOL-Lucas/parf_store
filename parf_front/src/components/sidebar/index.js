// Sidebar component

import styled from 'styled-components';
import { useState } from 'react';

import layoutSetLogo from '../../images/upload.png';
import homeIcon from '../../images/home.png';
import finance from '../../images/finance.png';
import plusProduct from '../../images/plusproduct.png';
import previousImage from '../../images/search.png';

const SidebarContainer = styled.div`
    overflow: hidden;
    box-sizing: content-box;
    position: relative;
    background: linear-gradient(0deg, #ff00ea 0%,  #fe5d7d 100%);
    height: 100vh;
    width: 20em;
    width: ${props => (props.$retracted ? '0em' : '20em')};
    box-shadow: 1px 1px 10px black;
    transform: ${props => (props.$retracted ? 'translateX(-100%)' : 'translateX(0)')};
    transition: transform 0.2s ease-in-out;

`;

const SidebarElement = styled.div`
    width: 100%;
    height: 100%;
    background-image: background: linear-gradient(0deg, #ff00ea 0%,  #fe5d7d 100%);
    transition: transform 0.1s ease-in-out;
    background-image: linear-gradient(to bottom, black 0%, transparent 0.9%);
    display: flex;
    justify-content: center;
`;

const sidebarItems = [
    {
        title: "Início",
        src: homeIcon,
    },
    {
        title:"Financeiro",
        src: finance,
    },
    {
        title: "Cadastrar Produto",
        src: plusProduct,
    },
    {
        title: "Visualizar Estoque",
        src: previousImage,
    },
];

const Ul = styled.ul`
    padding-top: 30px;
    padding-left: 0px;
    list-style: none;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Li = styled.li`
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    color: white;
    margin: 10px 2px 2px 5px;
    width: 95%;
    height: 25px;
    transition: 0.1s ease-in-out;

    &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    box-shadow: 0.1px 3px 10px black;
    border-left: 2px solid var(--credi-color-darker, #00a091);
    border-radius: 10px;
    }
`;

const ItemLogo = styled.img`
    align-self: center;
    justify-content: left;
    width: 20px;
    height: 20px;
    padding: 25px;
`;

const Sidebar = ({ state, alterState }) => {

    const redirectToModule = (event,module) => {
        event.preventDefault();
        
        console.log(module);
        window.location.href = `/${module}`;
    };

    return (
        <SidebarContainer $retracted={state === 'retracted'}>
            <SidebarElement>
                <Ul>
                    {sidebarItems.map((item, index) => {
                        return (
                            <Li key={index} onClick={(event)=> redirectToModule(event, item.title)}>
                                <ItemLogo src={item.src} alt={item.title}/>
                                <p>{item.title}</p>
                            </Li>
                            );
                        })}
                </Ul>
            </SidebarElement>
        </SidebarContainer>
    );
};

export default Sidebar;
