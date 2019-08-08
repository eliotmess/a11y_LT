import React, { Component } from 'react';
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

const ModalAcceptBtn = styled.button`
    font-family: 'Roboto Mono', monospace;
    padding: 10px 20px;
    font-size: 1.2rem;
    margin: 30px 0; 
    border: 2px solid #444;
    background: none;
    position: relative;
    top: 40px;
`;

const ModalInfoForSR = styled.p`
    color: #fff;
`;

class AccessModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = React.createRef();
    }

    componentDidMount() {
        this.closeModal.current.focus();
        window.addEventListener('keydown', (e) => this.closeModalWithEsc(e));
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', (e) => this.closeModalWithEsc(e));
    }

    closeModalWithEsc(e) {
        const { setVisibility } = this.props;
        if (e.key === "Escape") setVisibility(false);
    }

    render() {
        const { isVisible, setVisibility } = this.props;
        return (
            <ModalBackground>
                <ModalWrapper
                    aria-modal={isVisible} 
                    aria-expanded={isVisible} 
                    role="dialog"
                >
                    <ModalCloseBtn 
                        ref={this.closeModal}
                        aria-labelledby="closeModalAccess" 
                        onClick={() => setVisibility(!isVisible)}
                    >x</ModalCloseBtn>
                    <p>Dziękujemy, formularz został przesłany.</p>
                    <ModalInfoForSR 
                        aria-hidden="true" 
                        id="closeModalAccess"
                    >Kliknij, aby zamknąć modal</ModalInfoForSR>
                    <ModalAcceptBtn onClick={() => setVisibility(!isVisible)}>Wróć do strony</ModalAcceptBtn>
                </ModalWrapper>
            </ModalBackground>
        )
    }
};

export default AccessModal;