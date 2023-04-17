import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: raw;
  justify-content: center;
`;

export const InfoBox = styled.div`
  background: rgba(253, 249, 249, 0.86);
  border-radius: 15px;

  padding: 15px 35px;
  font-size: 24px;

  font-weight: ${p => p.theme.fontWeight.fw600};
  @media (min-width: 768px) {
    display: flex;
    width: 945px;
    padding: 15px 30px;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    padding: 20px 60px;
  }
`;

export const BoxTitle = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 20px;
  text-align: center;
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
  margin-bottom: 30px;
  font-size: ${p => p.theme.fontSize.fs20};

  font-size: 24px;
`;
export const Condition = styled.p`
  margin-bottom: 35px;
  margin-top: 45px;
  font-size: 24px;
  letter-spacing: 0.05em;
  line-height: 1.2;
  color: #000000;
  text-align: center;

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
  text-align: center;
`;
export const BoxPriceInfo = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 340px;
  }
`;
