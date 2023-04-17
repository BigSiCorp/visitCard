import { useState } from 'react';
import { Section } from 'utils/globalStyles';
import { FAQList, FAQIteam, FAQTitle, FAQBox } from '../FAQPage/FAQPage.styled';
import { PageTitle } from '../../components/Common/PageTitle/PageTitle';

export const FAQPage = () => {
  const [state, setState] = useState(false);
  // const indicate = false;
  // const changeOnClick = e => {
  //   e.preventDefault();
  //   console.dir(e.currentTarget.value);
  //   if (e.currentTarget) {
  //     setState(!state);
  //     return true;
  //   }
  // };
  return (
    <main>
      <Section>
        <PageTitle text="Часті питання" />

        <FAQList>
          <FAQIteam>
            <a href="##" onClick={() => setState(!state)}>
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
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="##" onClick={() => setState(!state)}>
              <FAQTitle>Навіщо працювати із психологом?</FAQTitle>
              {state && (
                <FAQBox>
                  <p>
                    Психолог допомагає розібратися в собі, за допомогою питань
                    підсвічує вам шлях до розуміння та вирішення ваших проблем.
                    Психолог ділитися своїми знаннями, досвідом, дає підтримку,
                    розуміння ситуації та допомагає розширити світогляд людини.
                  </p>
                </FAQBox>
              )}
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="##" onClick={() => setState(!state)}>
              <FAQTitle>
                Чи не буде розголошена інформація після роботи з психологом?
              </FAQTitle>
              {state && (
                <FAQBox>
                  <p>
                    Конфіденційність перше правило для психолога, це невід'ємна
                    частина будь-якої консультації. Інформація про вас не вийде
                    за межі консультації.
                  </p>
                </FAQBox>
              )}
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="##" onClick={() => setState(!state)}>
              <FAQTitle>
                Скільки разів потрібно ходити до психолога для опрацювання
                однієї проблеми?
              </FAQTitle>
              {state && (
                <FAQBox>
                  <p>
                    Для короткострокової роботи достатньо від 3 до 10 сеансів.
                  </p>
                </FAQBox>
              )}
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="##" onClick={e => setState(!state)}>
              <FAQTitle>
                Як підготувати себе до походу до психолога? Що я маю робити?
              </FAQTitle>
              {state && (
                <FAQBox>
                  <p>
                    Бажано підготувати зошит і ручку для записів, але це не
                    обов'язково. Також для себе можете подумки чи письмово
                    визначити над яким запитом хочете попрацювати і які очікуєте
                    на результати після роботи з психологом.
                  </p>
                </FAQBox>
              )}
            </a>
          </FAQIteam>
        </FAQList>
      </Section>
    </main>
  );
};
