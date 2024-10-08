import styled from 'styled-components';

export const UserMenu = styled.div`
  /* padding: 20px 0px; */
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  transition: transform;
  cursor: pointer;

  @media (min-width: 768px) {
    gap: 14px;
  }
  @media (min-width: 1440px) {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const UserIcon = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
