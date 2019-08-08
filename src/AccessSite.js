import React from 'react';
import styled from 'styled-components';
import AccessHeader from './AccessHeader';
import AccessForm from './AccessForm';
import AccessAside from './AccessAside';
import AccessImg from './AccessImg';
import AccessFooter from './AccessFooter';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const MainWrapper = styled.main`
  border-right: 2px solid #444;
  padding: 20px;
  width: 70%;
`;

function AccessSite() {
  return (
    <div>
      <header>
        <AccessHeader />
      </header>
      <ContentWrapper>
        <aside>
          <AccessAside />
        </aside>
        <MainWrapper id="main">
          <AccessImg />
          <AccessForm />
        </MainWrapper>
      </ContentWrapper>
      <AccessFooter />
    </div>
  );
}

export default AccessSite;
