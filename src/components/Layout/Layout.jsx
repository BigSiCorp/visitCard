import { Outlet } from 'react-router-dom';
import LogoPic1 from '../../images/logo1.png';
import LogoPic2 from '../../images/logo2.png';
import LogoPic3 from '../../images/logo3.png';
import IconInstargram from '../../images/insta.svg';
import IconYoutube from '../../images/youtube.svg';
import IconTelegram from '../../images/telegram.svg';
import {
  Container,
  ContainerFooter,
  Header,
  Logo1,
  Logo2,
  Logo3,
  Link,
  Footer,
  ContactList,
  Icon,
  Pretitle,
  Nav,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <a href="/visitCard/">
            <div>
              <Logo1 src={LogoPic1} alt="logo" width="120" />
              <Logo2 src={LogoPic2} alt="logo" width="120" />
            </div>
          </a>
          <Nav>
            <Link to="/about" end>
              Про мене
            </Link>
            <Link to="/blog">Блог</Link>
            <Link to="/contacts">Контакти</Link>
            <Link to="/questions">Часті питання</Link>
          </Nav>
        </Header>
        <Outlet />
      </Container>
      <ContainerFooter>
        <Footer>
          <a href="/visitCard/">
            <Logo3 src={LogoPic3} alt="logo" width="180" />
          </a>
          <Pretitle>Приєднуйся:</Pretitle>
          <ContactList>
            <li>
              <a href="https://t.me/Lenatai" target="blanc">
                <Icon src={IconTelegram} alt="Telegram Icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/elenabrapsy/" target="blanc">
                <Icon src={IconInstargram} alt="Instagram Icon" />
              </a>
            </li>
            <li>
              <a href="/" target="blanc">
                <Icon src={IconYoutube} alt="Youtube Icon" />
              </a>
            </li>
          </ContactList>
        </Footer>
      </ContainerFooter>
    </>
  );
};
