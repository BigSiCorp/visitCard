import styled from 'styled-components';

export const PageTitle = styled.h2`
  margin: 0 auto 30px;
  display: block;
  text-align: center;
  font-size: ${p => p.theme.fontSize.fs32};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: raw;
  padding: 15px 0 25px;
`;

export const InfoBox = styled.div`
  padding: 86px 10px;
  background-color: #fff;
  border-radius: 40px;
  margin-right: 15px;
  box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const BoxTitle = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: ${p => p.theme.fontSize.fs20};
  font-weight: ${p => p.theme.fontWeight.fw700};
`;

export const PriceInfo = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: ${p => p.theme.fontSize.fs24};
  /* font-weight: ${p => p.theme.fontWeight.fw700}; */
`;

export const PriceInfo1 = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs24};
  font-weight: ${p => p.theme.fontWeight.fw700};
  text-align: center;
`;
export const Img = styled.img`
  border-radius: 40px;
`;
export const Conditions = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs20};
`;
export const Condition = styled.p`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeight.fw700};
  font-size: ${p => p.theme.fontSize.fs20};
`;

export const ContactsList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: ${p => p.theme.fontSize.fs20};
  margin-bottom: 40px;
`;

export const Icon = styled.img`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
`;
export const ContactsIteam = styled.li`
  margin-bottom: 15px;
`;
