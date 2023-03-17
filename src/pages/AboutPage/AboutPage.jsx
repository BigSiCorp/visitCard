import { Section } from 'utils/globalStyles';
import { PageTitle } from '../../components/Common/PageTitle/PageTitle';
import PhotoOfOlena from '../../images/Olena1.jpg';
import {
  Box,
  BoxText,
  Img,
  Caption,
  List,
  Span,
} from '../AboutPage/AboutPage.styled';
export const AboutPage = () => {
  return (
    <main>
      <Section>
        <PageTitle text="Про мене" />
        <Box>
          <Img src={PhotoOfOlena} alt="Photo of Olena" />
          <BoxText>
            <p>
              <Span>Олена Бра</Span> - дипломований практикуючий
              психолог-консультант, коуч.
            </p>
            <p>
              В особистій терапії 3 роки, продовжую працювати над собою до цього
              дня.
            </p>
            <p>
              Постійно беру участь у груповій терапії. Відвідую майстер класи та
              продовжую навчатися далі.
            </p>
            <Caption>Поглиблено вивчала такі теми як:</Caption>
            <List>
              <li>самоцінність</li>
              <li>відповідальність</li>
              <li>особисті межі</li>
              <li>відносини між чоловіком та жінкою</li>
            </List>
          </BoxText>
        </Box>
      </Section>
    </main>
  );
};
