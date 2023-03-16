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
} from './HomePage.styled';
import PhotoOfOlena from '../../images/Olena.jpg';
import Light from '../../images/light.jpg';
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
          <p>
            <Span> Я Олена Бра </Span>- дипломований практикуючий
            психолог-консультант, коуч. Працюю онлайн у форматі аудіо-або
            відеодзвінок.
            <PreTitle>
              Вважаю, що наявність дипломів, досвід роботи з клієнтами є
              важливими, при цьому на перше місце ставлю особистість людини,
              тому перша міні сесія є безкоштовною для того, щоб ви відчули
              наскільки вам комфортно працювати зі мною.
            </PreTitle>
          </p>
        </Container>
      </Section>
    </main>
  );
};
