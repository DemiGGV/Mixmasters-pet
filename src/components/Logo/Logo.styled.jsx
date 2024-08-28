import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  margin-right: auto;
  z-index: 400;

  @media screen and (min-width: 1440px) {
  }
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const Icon = styled.svg`
  width: 22px;
  height: 22px;
  fill: var(--btn-color);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const Name = styled.span`
  font-weight: 600;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;
