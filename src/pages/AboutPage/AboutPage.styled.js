import styled from 'styled-components';
export const BoxText = styled.div`
  background: rgba(240, 251, 251, 0.65);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 300px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  padding: 25px;
  color: #262323;
  margin: 30px auto;
  @media (min-width: 768px) {
    width: 654px;
    font-size: 20px;
  }
`;
export const Img = styled.img`
  border-radius: 40px;
  width: 300px;
  display: block;
  margin: 10px auto;
  @media (min-width: 768px) {
    width: 387px;
  }
`;
export const Box = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 65px;
    align-items: center;
  }
`;
export const Caption = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  margin: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const List = styled.ul`
  list-style: disc;
  padding: 0 25px 0;
`;
export const Span = styled.span`
  font-weight: 600;
`;
