import { Section } from 'utils/globalStyles';
import PlaceForMeet from '../../images/Place_for_meet.jpg';
import IconInstargram from '../../images/insta.svg';
import IconTelegram from '../../images/telegram.svg';
import {
  PageTitle,
  Box,
  InfoBox,
  BoxTitle,
  PriceInfo,
  PriceInfo1,
  ContactsList,
  Icon,
  Conditions,
  Condition,
  Img,
  ContactsIteam,
  ConditionsText,
} from './ContactPage.styled';

export const ContactsPage = () => {
  return (
    <main>
      <Section>
        <PageTitle>Контакти</PageTitle>
        <Box>
          <InfoBox>
            <div>
              <BoxTitle>Запис на консультацію</BoxTitle>
              <ContactsList>
                <ContactsIteam>
                  через телеграм:
                  <a href="https://t.me/Lenatai" target="blanc">
                    <Icon src={IconTelegram} alt="Telegram Icon" />
                  </a>
                </ContactsIteam>
                <ContactsIteam>
                  через інстаграм:
                  <a
                    href="https://www.instagram.com/elenabrapsy/"
                    target="blanc"
                  >
                    <Icon src={IconInstargram} alt="Instagram Icon" />
                  </a>
                </ContactsIteam>
              </ContactsList>
            </div>
            <div>
              <PriceInfo>Вартість одного сеансу (60 хвилин)</PriceInfo>
              <PriceInfo1>1 000 грн.</PriceInfo1>
            </div>
          </InfoBox>
        </Box>

        <Condition>График работы:</Condition>
        <Conditions>Вторник – суббота с 11:00 до 19:30.</Conditions>
        <Conditions>Понедельник и воскресенье – нерабочие дни.</Conditions>
        <ConditionsText>
          Попасть на прием можно только по предварительной записи любым удобным
          способом, указанными выше. Сеансы проходят только в онлайн формате.
        </ConditionsText>
        <Img src={PlaceForMeet} alt="терасса у моря" width="800" />
      </Section>
    </main>
  );
};
