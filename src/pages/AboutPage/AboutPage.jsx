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
        <PageTitle text="Обо мне" />
        <Box>
          <Img src={PhotoOfOlena} alt="Photo of Olena" />
          <BoxText>
            <p>
              <Span>Елена Бра</Span> - В личной терапии 3 года,продолжаю
              работать над собой по сей день.
            </p>
            <p>
              В личной терапии 3 года,продолжаю работать над собой по сей день.
            </p>
            <p>
              Постоянно участвую в групповой терапии. Посещаю мастер классы и
              продолжаю учиться дальше.
            </p>
            <Caption>Углубленно изучала такие темы как:</Caption>
            <List>
              <li>самоценность</li>
              <li>ответственность</li>
              <li>личные границы</li>
              <li>отношения между мужчиной и женщиной</li>
            </List>
          </BoxText>
        </Box>
      </Section>
    </main>
  );
};
