/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import React from "react";
import {
  AttendanceInfo,
  Container,
  CourseDescription,
  CourseImage,
  CourseInfo,
  CourseTile,
  CourseType,
  CurPrice,
  IconConttainer,
  ImageContainer,
  MainInfo,
  MainPrice,
  MidLine,
  OfferPers,
  PeopleWish,
  Price,
  RateNumber,
  RowRate,
  SpeakerName,
  SubTitle,
  Title,
} from "./Course.Style";

function starIcon(active: boolean) {
  return !active ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3821 2.14587L11.79 4.96156C11.9819 5.35352 12.4939 5.72948 12.9258 5.80147L15.4775 6.22542C17.1094 6.49739 17.4933 7.68126 16.3175 8.84913L14.3337 10.8329C13.9977 11.1689 13.8137 11.8168 13.9177 12.2808L14.4857 14.7365C14.9336 16.6803 13.9017 17.4322 12.1819 16.4163L9.79017 15.0005C9.35822 14.7445 8.6463 14.7445 8.20635 15.0005L5.81461 16.4163C4.1028 17.4322 3.06292 16.6723 3.51087 14.7365L4.07881 12.2808C4.18279 11.8168 3.99881 11.1689 3.66285 10.8329L1.67907 8.84913C0.5112 7.68126 0.887159 6.49739 2.51898 6.22542L5.0707 5.80147C5.49465 5.72948 6.00659 5.35352 6.19857 4.96156L7.60642 2.14587C8.37433 0.618042 9.62219 0.618042 10.3821 2.14587Z"
        stroke="#F2C94C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3821 2.14587L11.79 4.96156C11.9819 5.35352 12.4939 5.72948 12.9258 5.80147L15.4775 6.22542C17.1094 6.49739 17.4933 7.68126 16.3175 8.84913L14.3337 10.8329C13.9977 11.1689 13.8137 11.8168 13.9177 12.2808L14.4857 14.7365C14.9336 16.6803 13.9017 17.4322 12.1819 16.4163L9.79017 15.0005C9.35822 14.7445 8.6463 14.7445 8.20635 15.0005L5.81461 16.4163C4.1028 17.4322 3.06292 16.6723 3.51087 14.7365L4.07881 12.2808C4.18279 11.8168 3.99881 11.1689 3.66285 10.8329L1.67907 8.84913C0.5112 7.68126 0.887159 6.49739 2.51898 6.22542L5.0707 5.80147C5.49465 5.72948 6.00659 5.35352 6.19857 4.96156L7.60642 2.14587C8.37433 0.618042 9.62219 0.618042 10.3821 2.14587Z"
        fill="#F2C94C"
        stroke="#F2C94C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export interface ICourse {
  speakerName: string;
  title: string;
  subTitle: string;
  rateFromFive: number;
  ratesNumber: string;
  currentPrice: string;
  mainPrice: string;
  offerPercentage: number;
  days: number;
  hours: number;
  attendance: string;
  peopleWishNum: string;
  onLine: boolean;
  imageUrl?: string;
  onClick?: () => void;
}
const Course = ({
  speakerName,
  title,
  subTitle,
  rateFromFive,
  ratesNumber,
  currentPrice,
  mainPrice,
  offerPercentage,
  days,
  hours,
  attendance,
  peopleWishNum,
  onLine,
  imageUrl,
  onClick,
}: ICourse) => {
  let stars = [0, 0, 0, 0, 0];
  return (
    <>
      <Container onClick={onClick}>
        <ImageContainer>
          <CourseImage
            src={
              imageUrl
                ? imageUrl
                : process.env.PUBLIC_URL + "/assets/images/Course Image.svg"
            }
          />
          <CourseType onLine={onLine}>
            {onLine ? <span>online</span> : <span>Offline</span>}
          </CourseType>
        </ImageContainer>

        <CourseDescription>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              justifyItems: "flex-start",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/Icons/PersonLogo.svg"}
            />
            <SpeakerName> {speakerName}</SpeakerName>
          </Box>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <RowRate>
            {stars.map((t, i) => starIcon(i < rateFromFive ? true : false))}

            <RateNumber>({ratesNumber})</RateNumber>
          </RowRate>
        </CourseDescription>
        <MidLine></MidLine>
        <CourseInfo>
          <MainInfo>
            <Price>
              <CurPrice>{currentPrice} SYP </CurPrice>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <MainPrice> {mainPrice} SYP</MainPrice>
                <OfferPers>
                  <span>{offerPercentage}% OFF</span>
                </OfferPers>
              </Box>
            </Price>
            <AttendanceInfo>
              <IconConttainer>
                <img
                  src={process.env.PUBLIC_URL + "/assets/Icons/Level Icon.svg"}
                />
              </IconConttainer>
              <IconConttainer>
                <img
                  src={process.env.PUBLIC_URL + "/assets/Icons/Time Icon.svg"}
                />
                <span>{days}d</span>
              </IconConttainer>
              <IconConttainer>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/Icons/Hourglass Icon.svg"
                  }
                />
                <span>{hours}h</span>
              </IconConttainer>
              <IconConttainer>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/Icons/Student Icon.svg"
                  }
                />
                <span>{attendance}</span>
              </IconConttainer>
            </AttendanceInfo>
          </MainInfo>
          <CourseTile>
            <PeopleWish>
              <img
                src={process.env.PUBLIC_URL + "/assets/Icons/Heart Icon.svg"}
              />
              <span>{peopleWishNum} People wish this item.</span>
            </PeopleWish>
          </CourseTile>
        </CourseInfo>
      </Container>
    </>
  );
};

export default Course;
