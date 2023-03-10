import styled from 'styled-components';

export const PageTitle = styled.h2`
  margin: 0 auto 30px;
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 64px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: raw;
  padding: 15px 0 25px;
  justify-content: center;
`;

export const InfoBox = styled.div`
  display: flex;
  width: 945px;
  margin-right: 15px;
  background: rgba(253, 249, 249, 0.86);
  border-radius: 15px;
  justify-content: space-between;
  padding: 15px 35px;
  font-size: 24px;

  font-weight: ${p => p.theme.fontWeight.fw600};
`;

export const BoxTitle = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 20px;

  font-weight: ${p => p.theme.fontWeight.fw700};
`;

export const PriceInfo = styled.p`
  margin-bottom: 20px;
  margin-top: 65px;
  text-align: center;
  font-size: ${p => p.theme.fontSize.fs24};
  /* font-weight: ${p => p.theme.fontWeight.fw700}; */
`;

export const PriceInfo1 = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs24};
  font-weight: ${p => p.theme.fontWeight.fw700};
  text-align: center;
  color: #ed2323;
`;
export const Img = styled.img`
  border-radius: 40px;
  width: 1120px;
  height: 567px;
`;
export const Conditions = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs20};
  font-weight: 600;
  font-size: 24px;
`;
export const ConditionsText = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs20};

  font-size: 24px;
`;
export const Condition = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  letter-spacing: 0.05em;
  line-height: 1.2;
  color: #000000;
  text-align: center;
  font-weight: 700;
  font-weight: ${p => p.theme.fontWeight.fw700};
`;

export const ContactsList = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-bottom: 20px;
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
