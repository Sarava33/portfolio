import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(-4px, -4px);
  }
`;

const LogoShape = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--bright-green);
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
    50% 0%, 100% 25%, 100% 75%, 
    50% 100%, 0% 75%, 0% 25%
  ); /* ✅ Perfect hexagon */
  border: 3px solid var(--bright-green); /* ✅ Keeps the edges visible */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 255, 0, 0.8);
  }
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #0fffc4;
  font-family: var(--font-mono);
  text-shadow: none;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoShape>
        <LogoText>MS</LogoText>
      </LogoShape>
    </LogoWrapper>
  );
};

export default Logo;
