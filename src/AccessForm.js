import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import AccessModal from './AccessModal';

const InputsForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0 40px 0;
`;

const InputsGroupsWrapper = styled.div`
    width: 100%;
    display: flex;
`;

const InputsGroup = styled.fieldset`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const InputsGroupItem = styled.div`
    margin: 10px 0;

    label {
        display: inline-block;
        width: 100px;
    }

    input, select {
        font-family: 'Roboto Mono', monospace;
        font-size: 1rem;
        padding: 5px;
        width: 200px;
    }
`;

const InputsFormBtn = styled.button`
    font-family: 'Roboto Mono', monospace;
    padding: 10px 20px;
    font-size: 1.2rem;
    margin: 30px 0; 
    border: 2px solid #444;
    background: none;

    &:hover {
        cursor: pointer;
    }
`;

const AccessForm = () => {
    const [modal, setModal] = useState(false);
    const [selectExpanded, setSelectExpanded] = useState(false);
    const showModalBtn = useRef(null);

    function handleModal(e) {
        e.preventDefault();
        setModal(!modal);
    }

    function setModalVisibility(isVisible) {
        setModal(isVisible);
        showModalBtn.current.focus();
    }

    function handleSelect(e) {
        if (e.key === " ") {
            setSelectExpanded(!selectExpanded);
        }
    }

    return (
        <>
            <h2>Formularz rejestracji</h2>
            <InputsForm>
                <InputsGroupsWrapper>
                    <InputsGroup>
                        <legend>Dane osobowe</legend>
                        <InputsGroupItem>
                            <label htmlFor="name">Imię</label>
                            <input type="text" id="name" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <label htmlFor="surname">Nazwisko</label>
                            <input type="text" id="surname" placeholder="Kowalski" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <label htmlFor="nickname">Login</label>
                            <input type="text" id="nickname" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <label htmlFor="pass">Hasło</label>
                            <input type="password" id="pass" placeholder="hasło" />
                        </InputsGroupItem>
                    </InputsGroup>
                    <InputsGroup>
                        <legend>Dane adresowe</legend>
                        <InputsGroupItem>
                            <label htmlFor="street">Ulica</label>
                            <input type="text" id="street" placeholder="ul. Główna" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <label htmlFor="city">Miasto</label>
                            <input type="text" id="city" placeholder="Poznań" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <label htmlFor="country">Kraj</label>
                            <select 
                                onKeyPress={(e) => handleSelect(e)} 
                                aria-expanded={selectExpanded}
                                type="text" 
                                id="country"
                            >
                                <option>Polska</option>
                                <option>Niemcy</option>
                                <option>Rosja</option>
                            </select>
                        </InputsGroupItem>
                    </InputsGroup>
                </InputsGroupsWrapper>
                <InputsFormBtn 
                    ref={showModalBtn} 
                    onClick={(e) => handleModal(e)}
                >Wyślij formularz</InputsFormBtn>
                {modal && (
                    <AccessModal 
                        id="modal" 
                        isVisible={modal}
                        setVisibility={(bool) => setModalVisibility(bool)} 
                    />
                )}
            </InputsForm>
        </>
    )
};

export default AccessForm;