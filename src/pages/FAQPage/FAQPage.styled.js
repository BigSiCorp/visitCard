import styled, { keyframes } from 'styled-components';
const keyAnimation = keyframes`
 0% {  width: 20%; opacity: 0;left:10%; top:0%;transform: translate(0%); }
 50% {  width: 50%; opacity: 0.2;left:30%; top:25%;transform: translate(-25%,-25%); }
 100% {  width:100%; opacity:1;left:50%; top:50%; transform: translate(-50%, -50%);}
`;
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
  @media (min-width: 1280px) {
    position: relative;
  }
`;
export const FAQIteam = styled.li`
  width: 499px;

  display: flex;
  flex-direction: column;
  // height: 329px;
  padding: 30px;
  background: rgba(255, 254, 254, 0.68);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 320px) and (max-width: 1279.9px) {
    position: relative;
  }
`;
export const FAQTitle = styled.p`
  font-weight: 700;
  text-align: center;
`;

export const FAQBoxAnimated = styled.div`
  position: absolute;

  // width: 600px;
  background-color: orange;
  opacity: 0.6;
  left: 30%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  z-index: 2;
  justify-content: center;
  border-radius: 10px;
  animation-name: ${keyAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (min-width: 768px) {
    animation-name: ${keyAnimation};
    padding: 20px;
  }
  @media (min-width: 1280px) {
    animation-name: ${keyAnimation};
    padding: 30px;
  }
`;
export const FAQ = styled.p`
  display: flex;
  align-items: center;
  flex-grow: 1;
  // transform: scale(1);
`;
