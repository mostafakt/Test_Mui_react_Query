import { Box } from "@mui/material/";
import styled from "styled-components";

const Container = styled(Box)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 44px;
  box-sizing: border-box;
  width: 300px;
  height: 606px;
  border: 1px solid rgba(251, 154, 11, 0.5);
  border-radius: 15px;
  justify-items: center;
`;
const CourseImage = styled.img`
  width: 268px;
  height: 248px;
  border-radius: 10px;
  background-color: red;
`;
const ImageContainer = styled(Box)`
  z-index: 0;
  overflow: hidden;
  position: relative;
  width: 268px;
  height: 248px;
`;
const CourseDescription = styled(Box)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const SpeakerName = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #828282;
`;
const Title = styled.span`
  text-align: start;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #333333;
`;
const SubTitle = styled.span`
  font-family: "Montserrat";
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
`;
const RateNumber = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #828282;
`;
const RowRate = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const MidLine = styled.div`
  width: 268px;
  height: 1px;
  margin: 12px 0px 12px 0px;
  background: rgba(251, 154, 11, 0.5);
`;
const Price = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const CurPrice = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`;
const MainPrice = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: line-through;
  color: #eb5757;
`;
const OfferPers = styled.div`
  padding: 0px 4px 0px 4px;
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    color: #ffffff;
  }
  background: #eb5757;
  border-radius: 2px;
`;
const CourseInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;
const MainInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const AttendanceInfo = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const IconConttainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #828282;
  }
`;
const PeopleWish = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #828282;
  }
`;
const CourseTile = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CourseType = styled(Box)<{ onLine: boolean }>`
  padding-top: 6px;
  z-index: 1;
  position: absolute;
  width: 120px;
  height: 32px;
  left: 176.63px;
  top: 16px;
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    transform: rotate(45deg);
  }
  background: ${(prop) =>
    prop.onLine
      ? `linear-gradient(269.05deg, #56CCF2 -0.02%, #3B7EC5 100.9%);`
      : `linear-gradient(269.05deg, #f2c94c -0.02%, #fb9a0b 100.9%)`};
  transform: rotate(45deg);
`;
export {
  ImageContainer,
  CourseType,
  CourseTile,
  PeopleWish,
  IconConttainer,
  AttendanceInfo,
  MainInfo,
  CourseDescription,
  OfferPers,
  MainPrice,
  CurPrice,
  Price,
  MidLine,
  RowRate,
  SpeakerName,
  CourseInfo,
  Container,
  CourseImage,
  Title,
  SubTitle,
  RateNumber,
};
