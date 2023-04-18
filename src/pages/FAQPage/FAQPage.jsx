import { useState } from 'react';
import { Section } from 'utils/globalStyles';
import {
  FAQList,
  FAQIteam,
  FAQTitle,
  FAQBox,
  // FAQBoxAnimated,
} from '../FAQPage/FAQPage.styled';
import { PageTitle } from '../../components/Common/PageTitle/PageTitle';

export const FAQPage = () => {
  const [state, setState] = useState(false);
  const [indicate, setIndicate] = useState(null);

  const changeOnClick = e => {
    e.preventDefault();
    const id = e.currentTarget.attributes.href.value;
    if (id !== indicate) {
      setIndicate(id);
      setState(true);
      return;
    }
    setState(!state);
  };
  return (
    <main>
      <Section>
        <PageTitle text="Часті питання" />

        <FAQList>
          <FAQIteam>
            <a href="1" onClick={changeOnClick}>
              <FAQTitle>
                Як можна записатися на терапію? Яка тривалість сесії?
              </FAQTitle>
              {state && indicate === '1' && (
                <FAQBox id="1">
                  <p>
                    Я працюю в телеграм,skype,instagram. Для запису напишіть
                    особисті повідомлення в телеграм або інстаграм. Тривалість
                    сесії 40-60 хвилин.
                  </p>
                </FAQBox>
              )}
              <FAQBox></FAQBox>
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="2" onClick={changeOnClick}>
              <FAQTitle>Навіщо працювати із психологом?</FAQTitle>
              {state && indicate === '2' && (
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
            <a href="3" onClick={changeOnClick}>
              <FAQTitle>
                Чи не буде розголошена інформація після роботи з психологом?
              </FAQTitle>
              {state && indicate === '3' && (
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
            <a href="4" onClick={changeOnClick}>
              <FAQTitle>
                Скільки разів потрібно ходити до психолога для опрацювання
                однієї проблеми?
              </FAQTitle>
              {state && indicate === '4' && (
                <FAQBox>
                  <p>
                    Для короткострокової роботи достатньо від 3 до 10 сеансів.
                  </p>
                </FAQBox>
              )}
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="5" onClick={changeOnClick}>
              <FAQTitle>
                Як підготувати себе до походу до психолога? Що я маю робити?
              </FAQTitle>
              {state && indicate === '5' && (
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
