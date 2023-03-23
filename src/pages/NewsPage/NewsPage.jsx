import { Section } from 'utils/globalStyles';
import { PageTitle } from '../../components/Common/PageTitle/PageTitle';
import Photo from '../../images/1.png';
import { Box, Img } from './NewsPage.styled';
export const BlogPage = () => {
  return (
    <main>
      <Section>
        <PageTitle text="Новости" />
        <Box>
          <Img src={Photo} alt="Photo" />
        </Box>
      </Section>
    </main>
  );
};
