import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .2);
`;

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 999;
    background: #fff;
    height: 500px;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border: 4px solid #444;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ModalCloseBtn = styled.button`
    position: absolute;
    font-family: 'Roboto Mono', monospace;
    top: 10px;
    right: 10px;
    font-size: 1.3rem;
    border: none;
    background: none;
`;

const ModalAcceptBtn = styled.div`
    font-family: 'Roboto Mono', monospace;
    padding: 10px 20px;
    font-size: 1.2rem;
    margin: 30px 0; 
    border: 2px solid #444;
    background: none;
    position: relative;
    top: 40px;
`;

const AccessForm = ({isVisible, setVisibility}) => {
    if(isVisible) {
        return (
            <ModalBackground>
                <ModalWrapper>
                    <ModalCloseBtn id="closeModal" aria-labelledby="closeModalAccess" onClick={() => setVisibility(!isVisible)}>x</ModalCloseBtn>
                    <p>Dziękujemy, formularz został przesłany.</p>
                    <ModalAcceptBtn onClick={() => setVisibility(!isVisible)}>Wróć do strony</ModalAcceptBtn>
                </ModalWrapper>
            </ModalBackground>
        )
    } else return null;
};

export default AccessForm;