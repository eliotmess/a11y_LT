import React from 'react';
import styled from 'styled-components';

const AsideList = styled.ul` 
    margin: 0;
    padding: 20px 0 20px 50px;
    list-style: none;
    width: 20vw;
`;

const AsideListItem = styled.li`
    margin-bottom: 20px;
`;

const AccessForm = () => {

    return (
        <AsideList>
            <AsideListItem><a href="/" aria-current="page">Główna</a></AsideListItem>
            <AsideListItem><a href="/">Artykuły</a></AsideListItem>
            <AsideListItem><a href="/">Zdjęcia</a></AsideListItem>
            <AsideListItem><a href="/">Filmy</a></AsideListItem>
            <AsideListItem><a href="/">Kontakt</a></AsideListItem>
        </AsideList>
    )
};

export default AccessForm;