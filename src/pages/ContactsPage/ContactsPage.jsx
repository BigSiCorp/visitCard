import { Section } from 'utils/globalStyles';
import PlaceForMeet from '../../images/Place_for_meet.jpg';
import IconInstargram from '../../images/insta.svg';
import IconTelegram from '../../images/telegram.svg';
import {
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
import { PageTitle } from '../../components/Common/PageTitle/PageTitle';
export const ContactsPage = () => {
  return (
    <main>
      <Section>
        <PageTitle text="Контакты" />

        <Box>
          <InfoBox>
            <div>
              <BoxTitle>Запись на консультацию</BoxTitle>
              <ContactsList>
                <ContactsIteam>
                  через телеграмм:
                  <a href="https://t.me/Lenatai" target="blanc">
                    <Icon src={IconTelegram} alt="Telegram Icon" />
                  </a>
                </ContactsIteam>
                <ContactsIteam>
                  через инстаграмм:
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
              <PriceInfo>Продолжительность одного сеанса</PriceInfo>
              <PriceInfo1>60мин</PriceInfo1>
            </div>
          </InfoBox>
        </Box>

        <Condition>График работы:</Condition>
        <Conditions>Понедельник – воскресенье с 09:00 до 21:00.</Conditions>
        <ConditionsText>
          Попасть на прием можно только по предварительной записи любым удобным
          способом, указанными выше. Сеансы проходят только в онлайн формате.
        </ConditionsText>
        <Img src={PlaceForMeet} alt="терасса у моря" width="800" />
      </Section>
    </main>
  );
};
