import { Section } from 'utils/globalStyles';
import { PageTitle } from '../../components/Common/PageTitle/PageTitle';
import {
  BoxText,
  Img,
  Box,
  Container,
  BoxImg,
  Span,
  PreTitle,
  Content,
  List,
  Item,
  Icon,
  Subtitle,
  Caption,
  Text,
} from './HomePage.styled';
import PhotoOfOlena from '../../images/Olena.jpg';
import Light from '../../images/light.jpg';
import Search from '../../images/search.svg';
import Dollar from '../../images/dollar.svg';
import Broken from '../../images/broken-heart.svg';
import Love from '../../images/love.svg';
export const HomePage = () => {
  return (
    <main>
      <Section>
        <PageTitle text="Вітаю, друзі!" />
        <Box>
          <BoxText>
            Ваш час обмежений, тому не витрачайте його, проживаючи чиєсь чуже
            життя. Не попадайтеся в пастку догми – не живіть чужими думками. Не
            давайте шуму чужих думок заглушати власний внутрішній голос. І
            найголовніше – майте мужність слідувати своєму серцю і розуму. Вони
            якимось чином вже знають, ким ти повинен стати. Все інше – вторинне.
          </BoxText>
          <Img src={PhotoOfOlena} alt="Photo of Olena" />
        </Box>
        <Container>
          <BoxImg src={Light} alt="light" />
          <div>
            <Span> Я Олена Бра </Span>- дипломований практикуючий
            психолог-консультант, коуч. Працюю онлайн у форматі аудіо-або
            відеодзвінок.
            <PreTitle>
              Вважаю, що наявність дипломів, досвід роботи з клієнтами є
              важливими, при цьому на перше місце ставлю особистість людини,
              тому перша міні сесія є безкоштовною для того, щоб ви відчули
              наскільки вам комфортно працювати зі мною.
            </PreTitle>
          </div>
        </Container>
        <Content>
          <Caption> Працюю з такими запитами:</Caption>
          <List>
            <Item>
              <Icon src={Search} alt="search" />
              <Subtitle>Пошуки себе, сенс життя, призначення.</Subtitle>
            </Item>
            <Item>
              <Icon src={Dollar} alt="dollar" />
              <Subtitle>Фінанси. Вчимося заробляти більше.</Subtitle>
            </Item>
            <Item>
              <Icon src={Broken} alt="broken" />
              <Subtitle>Проблеми у стосунках.</Subtitle>
            </Item>
            <Item>
              <Icon src={Love} alt="love" />
              <Subtitle>Партнерські відносини.</Subtitle>
            </Item>
          </List>
          <Text>
            Працювати з психологом рекомендую протягом 1-3 місяців,
            зустрічаючись 1 раз на тиждень, все індивідуально, разова сесія
            також можлива.
          </Text>
        </Content>
      </Section>
    </main>
  );
};
