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
        <PageTitle text="Здравствуйте, друзья!" />
        <Box>
          <BoxText>
            Ваше время ограничено, поэтому не тратьте его, проживая чью-то чужую
            жизнь. Не попадайтесь в ловушку догмы – не живите чужими мыслями. Не
            давайте шуму чужих мыслей заглушать свой внутренний голос. И самое
            главное – имейте мужество следовать своему сердцу и разуму. Они уже
            каким-то образом знают, кем ты должен стать. Все остальное –
            вторично.
          </BoxText>
          <Img src={PhotoOfOlena} alt="Photo of Olena" />
        </Box>
        <Container>
          <BoxImg src={Light} alt="light" />
          <div>
            <Span> Я Елена Бра </Span>- дипломированный практикующий
            психолог-консультант, коуч. Работаю онлайн в формате аудио- или
            видеовызова.
            <PreTitle>
              Считаю, что наличие дипломов, опыт работы с клиентами есть
              важными, при этом во главу угла ставлю личность человека, поэтому
              первая мини-сессия является бесплатной для того, чтобы вы
              почувствовали как вам удобно работать со мной.
            </PreTitle>
          </div>
        </Container>
        <Content>
          <Caption>
            Работаю со следующими<br></br> запросами:
          </Caption>
          <List>
            <Item>
              <Icon src={Search} alt="search" />

              <Subtitle>Поиски себя, смысл жизни, предназначение.</Subtitle>
            </Item>
            <Item>
              <Icon src={Dollar} alt="dollar" />
              <Subtitle>Деньги. Учимся зарабатывать больше.</Subtitle>
            </Item>
            <Item>
              <Icon src={Broken} alt="broken" />
              <Subtitle>Проблемы в отношениях.</Subtitle>
            </Item>
            <Item>
              <Icon src={Love} alt="love" />
              <Subtitle>Партнерские отношения.</Subtitle>
            </Item>
          </List>
          <Text>
            Работать с психологом рекомендую в течение 1-3 месяцев, встречаясь 1
            раз в неделю, все индивидуально, разовая сессия также возможно.
          </Text>
        </Content>
      </Section>
    </main>
  );
};
