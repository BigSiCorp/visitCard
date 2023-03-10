import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ContainerFooter = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
  bottom: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 25px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo1 = styled.img`
  margin: 0;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: linear;
  transition-delay: 0;
  cursor: pointer;

  :hover {
    transform: rotate(270deg);
  }
`;

export const Logo2 = styled.img`
  margin: 0;
  cursor: pointer;
`;
export const Logo3 = styled.img`
  margin: 0;
  cursor: pointer;
  margin-top: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #000000;
  font-weight: 700;
  font-size: 20px;

  border-radius: 40px;

  &.active {
    color: white;
    background-color: #0b23ff;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-top: 1px solid black;
  bottom: 0px;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
export const Pretitle = styled.p`
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeight.fw600};
  margin-left: auto;
`;
