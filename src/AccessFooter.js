import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    border-top: 2px solid #444;
    font-size: .8rem;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const AccessFooter = () => {

    return (
        <FooterWrapper>
            <p>&copy; 2019 Espeo Software, GO</p>
        </FooterWrapper>
    )
};

export default AccessFooter;