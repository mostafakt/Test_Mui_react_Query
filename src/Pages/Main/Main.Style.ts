import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)``;
const CoursesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const BacKground = styled.div`
  position: absolute;
  width: 1104px;
  height: 1474px;
  left: 48px;
  top: 180px;
  background: linear-gradient(
    246.61deg,
    rgba(251, 154, 11, 0.05) 0%,
    rgba(59, 126, 197, 0.05) 100%
  );
  border-radius: 20px;
  z-index: -1;
  @media (max-width: 1170px) {
    width: 600px;
  }
  @media (max-width: 659px) {
    width: 300px;
  }
`;
const Wrapper = styled(Box)`
  margin-top: 72px;
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const CoursesHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const CoursesHeaderContent = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HeaderText = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center !important;
  align-content: center;
  gap: 24px;
  a {
    font-family: "Montserrat" !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 20px !important ;
    line-height: 24px !important;
    color: #3b7ec5 !important;
  }
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    color: #333333;
  }
`;
const HeaderButton = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: center;
`;
const HeaderLine = styled(Box)`
  width: 461px;
  height: 1px;
  position: absolute;
  top: 55px;
  left: -96px;

  background: #333333;
  @media (max-width: 512px) {
    width: 261px;
  }
`;
const HeaderCircle = styled(Box)`
  width: 8px;
  height: 8px;
  position: absolute;
  top: 52px;
  left: 365px;
  background: #333333;
  @media (max-width: 512px) {
    left: 165px;
  }
  border-radius: 5px;
`;
const Courses = styled(Box)`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  gap: 16px;
`;

export {
  BacKground,
  Wrapper,
  Courses,
  HeaderCircle,
  HeaderLine,
  HeaderButton,
  HeaderText,
  CoursesHeaderContent,
  CoursesHeader,
  CoursesContainer,
  Container,
};
