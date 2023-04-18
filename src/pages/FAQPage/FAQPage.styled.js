import styled from 'styled-components';

export const PageTitle = styled.h2`
  margin: 0 auto 50px;
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 64px;
`;
export const FAQList = styled.ul`
  display: flex;
  font-size: 20px;
  line-height: 1.5;
  color: #000000;
  flex-wrap: wrap;
  column-gap: 88px;
  row-gap: 50px;
  text-align: center;
  margin-bottom: 50px;
`;
export const FAQIteam = styled.li`
  /* position: relative; */
  width: 499px;
  display: flex;
  flex-direction: column;
  // height: 329px;
  padding: 30px;
  background: rgba(255, 254, 254, 0.68);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const FAQTitle = styled.p`
  font-weight: 700;
  text-align: center;
`;

export const FAQBox = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  /* transform: scale(1);
  transition: transform 25000ms cubic-bezier(0.4, 0, 0.2, 1); */
`;

export const FAQBoxAnimated = styled.div`
  position: absolute;

  width: 600px;
  background-color: orange;
  opacity: 0.6;
  left: 30%;
  border-radius: 10px;
  transform: scale(2) translateX(0%);
`;
