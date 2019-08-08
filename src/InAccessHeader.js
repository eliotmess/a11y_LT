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

const HeaderLogo = styled.p`
    font-size: 2.8rem;
    font-weight: 600;
`;

const HeaderDecoration = styled.img`
    position: absolute;
    right: -20%;
    top: -105%;
    width: 40%;
    height: auto;
`;

const HeaderSkipText = styled.p`
    position: absolute;
    left: -100%;
    top: 15px;
    text-decoration: none;

    :focus-within  {
        left: 3%;
    }
`;

const HeaderSkipLink = styled.a`
    text-decoration: none;
`;

const HeaderMenu = styled.ul`
    position: absolute;
    bottom: 0;
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;    
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
`;

const Navigation = styled.div`
    width: 100%;
`;

const HeaderMenuLink = styled.a`
    width: 15%;
    text-decoration: none;
    padding: 3px 0;
    color: #444;

    &:focus {
        outline: none;
        color: purple;
    }
`;


const InAccessHeader = () => {

    return (
        <HeaderWrapper>
            <HeaderSkipText>
                Aby przejść do treści strony <HeaderSkipLink href="#main2">kliknij tutaj</HeaderSkipLink>
            </HeaderSkipText>
            <HeaderLogo>Inaccessible</HeaderLogo>
            <HeaderDecoration src={Circ} alt="Dekoracja" />
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

export default InAccessHeader;