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
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <a href="/visitCard/">
            <div>
              <Logo1 src={LogoPic1} alt="logo" width="200" />
              <Logo2 src={LogoPic2} alt="logo" width="200" />
            </div>
          </a>
          <nav>
            {/* <Link to="/" end>
            Обо мне
          </Link> */}
            <Link to="/about" end>
              Обо мне
            </Link>
            <Link to="/blog">Блог</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/questions">Частые вопросы</Link>
          </nav>
        </Header>
        <Outlet />
      </Container>
      <ContainerFooter>
        <Footer>
          <ul>
            <li>Телеграмм</li>
            <li>Инстаграмм</li>
          </ul>
        </Footer>
      </ContainerFooter>
    </>
  );
};
