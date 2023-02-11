import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const IconInstargram = styled(FaInstagram)`
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.icons};
`;
export const IconTelegram = styled(FaTelegram)`
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.icons};
`;

export const IconYoutube = styled(FaYoutube)`
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.icons};
`;
export const ContainerFooter = styled.div`
  max-width: 960px;
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
  margin-bottom: 16px;
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

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
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
  margin-left: auto;
`;