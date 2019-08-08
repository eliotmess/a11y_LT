import React from 'react';
import styled from 'styled-components';
import InAccessHeader from './InAccessHeader';
import InAccessForm from './InAccessForm';
import InAccessAside from './InAccessAside';
import InAccessImg from './InAccessImg';
import InAccessFooter from './InAccessFooter';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const MainWrapper = styled.div`
  border-right: 2px solid #444;
  padding: 20px;
  width: 70%;
`;

function InAccessSite() {
  return (
    <div>
      <div>
        <InAccessHeader />
      </div>
      <ContentWrapper>
        <div>
          <InAccessAside />
        </div>
        <MainWrapper id="main2">
          <InAccessImg />
          <InAccessForm />
        </MainWrapper>
      </ContentWrapper>
      <InAccessFooter />
    </div>
  );
}

export default InAccessSite;
