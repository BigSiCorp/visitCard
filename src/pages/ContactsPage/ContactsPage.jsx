import { Section } from 'utils/globalStyles';
import PlaceForMeet from '../../images/Place_for_meet.jpg';
import {
  PageTitle,
  Box,
  InfoBox,
  BoxTitle,
  PriceInfo,
  PriceInfo1,
  ContactsList,
  IconInstargram,
  IconTelegram,
  Conditions,
} from './ContactPage.styled';

export const ContactsPage = () => {
  return (
    <main>
      <Section>
        <PageTitle>Контакти</PageTitle>
        <Box>
          <InfoBox>
            <BoxTitle>Запис на консультацію</BoxTitle>
            <ContactsList>
              <li>
                через телеграм:
                <IconTelegram />
              </li>
              <li>
                через інстаграм:
                <IconInstargram />
              </li>
            </ContactsList>
            <PriceInfo>Вартість одного сеансу (60 хвилин)</PriceInfo>
            <PriceInfo1>1 000 грн.</PriceInfo1>
          </InfoBox>
          <img src={PlaceForMeet} alt="терасса у моря" width="800" />
        </Box>
        <Conditions>
          Попасть на прием можно только по предварительной записи любым удобным
          способом, указанными выше. Сеансы проходят только в онлайн формате.
        </Conditions>
        <Conditions>
          График работы: Вторник – суббота с 11:00 до 19:30.
        </Conditions>
        <Conditions>Понедельник и воскресенье – нерабочие дни.</Conditions>
      </Section>
    </main>
  );
};
