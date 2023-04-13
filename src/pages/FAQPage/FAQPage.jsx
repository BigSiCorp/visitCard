import { useState } from 'react';
import { Section } from 'utils/globalStyles';
import { FAQList, FAQIteam, FAQTitle, FAQBox } from '../FAQPage/FAQPage.styled';
import { PageTitle } from '../../components/Common/PageTitle/PageTitle';

export const FAQPage = () => {
  const [state, setState] = useState(false);

  return (
    <main>
      <Section>
        <PageTitle text="Часті питання" />

        <FAQList>
          <FAQIteam>
            <button type="button" onClick={() => setState(!state)}>
              <FAQTitle>
                Як можна записатися на терапію? Яка тривалість сесії?
              </FAQTitle>
              {state && (
                <FAQBox>
                  <p>
                    Я працюю в телеграм,skype,instagram. Для запису напишіть
                    особисті повідомлення в телеграм або інстаграм. Тривалість
                    сесії 40-60 хвилин.
                  </p>
                </FAQBox>
              )}
            </button>
          </FAQIteam>
          <FAQIteam>
            <FAQTitle>Навіщо працювати із психологом?</FAQTitle>
            <FAQBox>
              <p>
                Психолог допомагає розібратися в собі, за допомогою питань
                підсвічує вам шлях до розуміння та вирішення ваших проблем.
                Психолог ділитися своїми знаннями, досвідом, дає підтримку,
                розуміння ситуації та допомагає розширити світогляд людини.
              </p>
            </FAQBox>
          </FAQIteam>
          <FAQIteam>
            <FAQTitle>
              Чи не буде розголошена інформація після роботи з психологом?
            </FAQTitle>
            <FAQBox>
              <p>
                Конфіденційність перше правило для психолога, це невід'ємна
                частина будь-якої консультації. Інформація про вас не вийде за
                межі консультації.
              </p>
            </FAQBox>
          </FAQIteam>
          <FAQIteam>
            <FAQTitle>
              Скільки разів потрібно ходити до психолога для опрацювання однієї
              проблеми?
            </FAQTitle>

            <FAQBox>
              <p>Для короткострокової роботи достатньо від 3 до 10 сеансів.</p>
            </FAQBox>
          </FAQIteam>
          <FAQIteam>
            <FAQTitle>
              Як підготувати себе до походу до психолога? Що я маю робити?
            </FAQTitle>
            <FAQBox>
              <p>
                Бажано підготувати зошит і ручку для записів, але це не
                обов'язково. Також для себе можете подумки чи письмово визначити
                над яким запитом хочете попрацювати і які очікуєте на результати
                після роботи з психологом.
              </p>
            </FAQBox>
          </FAQIteam>
        </FAQList>
      </Section>
    </main>
  );
};
