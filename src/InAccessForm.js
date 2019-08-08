import React, { useState } from 'react';
import styled from 'styled-components';
import InAccessModal from './InAccessModal';

const InputsFormHeader = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
`;

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

    p {
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

const InputsFormBtn = styled.div`
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

    async function handleModal(e) {
        e.preventDefault();
        await setModal(!modal);
        // await document.getElementById('closeModal').focus();
    }

    return (
        <>
            <InputsFormHeader>Formularz rejestracji</InputsFormHeader>
            <InputsForm>
                <InputsGroupsWrapper>
                    <InputsGroup>
                        <legend>Dane osobowe</legend>
                        <InputsGroupItem>
                            <p>Imię</p>
                            <input type="text" id="name" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <p htmlFor="surname">Nazwisko</p>
                            <input type="text" id="surname" placeholder="Kowalski" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <p htmlFor="nickname">Login</p>
                            <input type="text" id="nickname" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <p htmlFor="pass">Hasło</p>
                            <input type="password" id="pass" placeholder="hasło" />
                        </InputsGroupItem>
                    </InputsGroup>
                    <InputsGroup>
                        <legend>Dane adresowe</legend>
                        <InputsGroupItem>
                            <p htmlFor="street">Ulica</p>
                            <input type="text" id="street" placeholder="ul. Główna" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <p htmlFor="city">Miasto</p>
                            <input type="text" id="city" placeholder="Poznań" />
                        </InputsGroupItem>
                        <InputsGroupItem>
                            <p htmlFor="country">Kraj</p>
                            <select type="text" id="country">
                                <option>Polska</option>
                                <option>Niemcy</option>
                                <option>Rosja</option>
                            </select>
                        </InputsGroupItem>
                    </InputsGroup>
                </InputsGroupsWrapper>
                <InputsFormBtn id="showModalBtn"  onClick={(e) => handleModal(e)}>Wyślij formularz</InputsFormBtn>
                <InAccessModal id="modal" isVisible={modal} setVisibility={(bool) => setModal(bool)} />
            </InputsForm>
        </>
    )
};

export default AccessForm;