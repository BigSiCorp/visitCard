import styled from 'styled-components';
export const BoxText = styled.div`
  background: rgba(240, 251, 251, 0.65);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 14px;
  line-height: 1.5;
  min-width: 320px;
  letter-spacing: 0.05em;
  text-align: center;
  padding: 10px;
  color: #262323;
  margin: 30px;
  @media (min-width: 768px) {
    font-weight: 600;
    font-size: 20px;
    padding: 25px;
  }
  @media (min-width: 1280px) {
    font-weight: 600;
    font-size: 20px;
    text-align: justify;
  }
`;
export const Img = styled.img`
  border-radius: 40px;

  display: block;
  width: 320px;
  margin: 10px auto;

  @media (min-width: 768px) {
    width: 387px;
  }
`;
export const BoxImg = styled.img`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    border-radius: 40px;
    width: 338px;
  }
`;
export const Box = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 65px;
    align-items: center;
  }
`;
export const Container = styled.div`
  background: rgba(240, 251, 251, 0.65);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.05em;
  padding: 20px;
  border-radius: 40px;
  text-align: center;
  margin: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    display: flex;
    gap: 65px;
    font-size: 20px;
    align-items: center;
    padding: 30px;
  }
  @media (min-width: 1280px) {
    text-align: left;
    margin-right: 0px;
  }
`;
export const Span = styled.span`
  font-weight: 700;
`;
export const PreTitle = styled.p`
  margin-top: 30px;
`;
export const Content = styled.div`
  background: rgba(240, 251, 251, 0.65);
  border-radius: 40px;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    padding: 38px 75px;
    margin-top: 70px;
    margin-bottom: 70px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;

  margin-top: 30px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 217px;
    flex-wrap: nowrap;
    justify-content: none;
    row-gap: none;
    gap: 54px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background: rgba(126, 227, 216, 0.84);

  border-radius: 15px;
  padding: 15px;
  align-items: center;
  width: calc((100% - 5%) / 2);
  min-height: 153px;
  @media (min-width: 768px) {
    width: 217px;
  }
`;
export const Icon = styled.img`
  width: 64px;
  height: 50px;
  @media (min-width: 768px) {
    height: 64px;
  }
`;
export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  font-size: 14x;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
  }
`;
export const Caption = styled.h1`
  text-align: center;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
