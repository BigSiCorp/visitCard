import { Section } from 'utils/globalStyles';
import { PageTitle } from '../../components/Common/PageTitle/PageTitle';
import Photo from '../../images/1.png';
import { news } from '../../data/news';
import { Box, Img } from './NewsPage.styled';
export const BlogPage = () => {
  return (
    <main>
      <Section>
        <PageTitle text="Новости" />
        <Box>
          <ul>
            {news.length > 0 &&
              news.map(({ id, title, text }) => (
                <li key={id}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
          </ul>

          {news.length === 0 && <Img src={Photo} alt="Photo" />}
        </Box>
      </Section>
    </main>
  );
};
