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
                Как можно записаться на терапию? Какая длительность сессии?
              </FAQTitle>
              {state && indicate === '1' && (
                <FAQBox id="1">
                  <p>
                    Я работаю в телеграм,skype,instagram. Для записи напишите в
                    личные сообщения в телеграмм или инстаграм. Длительность
                    сессии 40-60 минут.
                  </p>
                </FAQBox>
              )}
              <FAQBox></FAQBox>
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="2" onClick={changeOnClick}>
              <FAQTitle>Зачем работать с психологом?</FAQTitle>
              {state && indicate === '2' && (
                <FAQBox>
                  <p>
                    Психолог помогает разобраться в себе,с помощью вопросов
                    подсвечивает вам путь к пониманию и решению ваших проблем.
                    Психолог делиться своими знаниями,опытом,дает
                    поддержку,понимание ситуации и помогает расширить
                    мировоззрение человека.
                  </p>
                </FAQBox>
              )}
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="3" onClick={changeOnClick}>
              <FAQTitle>
                Не будет ли информация разглашена после работы с психологом?
              </FAQTitle>
              {state && indicate === '3' && (
                <FAQBox>
                  <p>
                    Конфиденциальность первое правило для психолога,это
                    неотъемлемая часть любой консультации.Информация о вас не
                    выйдет за пределы консультации.
                  </p>
                </FAQBox>
              )}
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="4" onClick={changeOnClick}>
              <FAQTitle>
                Сколько раз нужно ходить к психологу для проработки одной
                проблемы?
              </FAQTitle>
              {state && indicate === '4' && (
                <FAQBox>
                  <p>Для краткосрочной работы достаточно от 3 до 10 сеансов.</p>
                </FAQBox>
              )}
            </a>
          </FAQIteam>
          <FAQIteam>
            <a href="5" onClick={changeOnClick}>
              <FAQTitle>
                Как подготовить себя к походу к психологу?Что я должен делать?
              </FAQTitle>
              {state && indicate === '5' && (
                <FAQBox>
                  <p>
                    Желательно подготовить тетрадку и ручку для записей,но это
                    не обязательно.Также для себя можете мысленно или письменно
                    определить над каким запросом хотите поработать и какие
                    ожидаете результаты после работы с психологом.
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
