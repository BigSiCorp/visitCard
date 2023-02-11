import styled from 'styled-components';
import { FaTelegram, FaInstagram } from 'react-icons/fa';

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
  padding: 65px 0;
`;

export const BoxTitle = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs20};
  font-weight: ${p => p.theme.fontWeight.fw700};
`;

export const PriceInfo = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs24};
  /* font-weight: ${p => p.theme.fontWeight.fw700}; */
  /* text-align: center; */
`;

export const PriceInfo1 = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs24};
  text-align: center;
`;

export const Conditions = styled.p`
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSize.fs20};
`;

export const ContactsList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: ${p => p.theme.fontSize.fs20};
  margin-bottom: 100px;
`;

export const IconInstargram = styled(FaInstagram)`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.icons};
`;

export const IconTelegram = styled(FaTelegram)`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.icons};
`;
