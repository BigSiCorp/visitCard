import { Outlet } from 'react-router-dom';
import LogoPic1 from '../../images/logo1.png';
import LogoPic2 from '../../images/logo2.png';
import {
  Container,
  ContainerFooter,
  Header,
  Logo1,
  Logo2,
  Link,
  Footer,
  ContactList,
  IconInstargram,
  IconTelegram,
  IconYoutube,
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
          <nav>
            {/* <Link to="/" end>
            Обо мне
          </Link> */}
            <Link to="/about" end>
              Про мене
            </Link>
            <Link to="/blog">Блог</Link>
            <Link to="/contacts">Контакти</Link>
            <Link to="/questions">Часті питання</Link>
          </nav>
        </Header>
        <Outlet />
      </Container>
      <ContainerFooter>
        <Footer>
          <ContactList>
            <li>
              <IconTelegram />
            </li>
            <li>
              <IconInstargram />
            </li>
            <li>
              <IconYoutube />
            </li>
          </ContactList>
        </Footer>
      </ContainerFooter>
    </>
  );
};
