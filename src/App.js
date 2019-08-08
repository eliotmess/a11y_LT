import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LinkBtn = styled.button`
  font-family: 'Roboto Mono', monospace;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 30px 15px; 
  border: 2px solid #444;
  background: none;
`;

function App() {
  return (
    <LinkWrapper>
      <Link to="/accessible">
        <LinkBtn>Accessible</LinkBtn>
      </Link>
      <Link to="/inaccessible">
        <LinkBtn>Inaccessible</LinkBtn>
      </Link>
    </LinkWrapper>
  );
}

export default App;
