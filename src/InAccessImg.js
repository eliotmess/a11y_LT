import React from 'react';
import styled from 'styled-components';
import Lama from './assets/lama.jpg';

const ImgWrapper = styled.div`
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: relative;
`;

const LamaImg = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
`;

const AccessHeader = () => {

    return (
        <ImgWrapper>
            <LamaImg src={Lama} />
        </ImgWrapper>
    )
};

export default AccessHeader;