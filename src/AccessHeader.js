import React from 'react';
import styled from 'styled-components';
import Circ from './assets/circ.png';

const HeaderWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28vh;
    width: 100vw;
    flex-direction: column;
    border-bottom: 2px solid #444;
`;

const HeaderLogo = styled.h1`
    font-size: 2.8rem;
`;

const HeaderDecoration = styled.img`
    position: absolute;
    right: -20%;
    top: -105%;
    width: 40%;
    height: auto;
`;

const HeaderSkipLink = styled.a`
    position: absolute;
    left: -100%;
    top: 15px;
    text-decoration: none;

    &:focus {
        left: 15px;
    }
`;

const HeaderMenu = styled.ul`
    position: absolute;
    bottom: 0;
    padding: 0;
    margin: 0;
    left: 0;
    display: flex;
    list-style: none;    
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
`;

const Navigation = styled.nav`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

const HeaderMenuLink = styled.a`
    width: 12%;
    text-decoration: none;
    padding: 3px 0;
`;


const AccessHeader = () => {

    return (
        <HeaderWrapper>
            <HeaderSkipLink href="#main">Przejdź do treści strony</HeaderSkipLink>
            <HeaderLogo>Accessible</HeaderLogo>
            <HeaderDecoration src={Circ} aria-hidden="true" alt="Dekoracja" />
            <Navigation>
                <HeaderMenu>
                    <HeaderMenuLink href="/"><li>Link1</li></HeaderMenuLink>
                    <HeaderMenuLink href="/"><li>Link2</li></HeaderMenuLink>
                    <HeaderMenuLink href="/"><li>Link3</li></HeaderMenuLink>
                    <HeaderMenuLink href="/"><li>Link4</li></HeaderMenuLink>
                    <HeaderMenuLink href="/"><li>Link5</li></HeaderMenuLink>
                </HeaderMenu>
            </Navigation>
        </HeaderWrapper>
    )
};

export default AccessHeader;