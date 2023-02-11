import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import SideList from "../../Components/SideList";
import { coursConfig } from "./config";
import Course from "./Course";
import {
  BacKground,
  Courses,
  CoursesContainer,
  CoursesHeader,
  CoursesHeaderContent,
  HeaderButton,
  HeaderCircle,
  HeaderLine,
  HeaderText,
  Wrapper,
} from "./Main.Style";

function RightArrow(active: boolean) {
  return (
    <svg
      width="14"
      height="28"
      viewBox="0 0 14 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.48273 27.3337C1.19049 27.3337 0.898257 27.226 0.667543 26.9953C0.221496 26.5492 0.221496 25.8109 0.667543 25.3649L10.6959 15.3365C11.4342 14.5983 11.4342 13.3985 10.6959 12.6603L0.667543 2.6319C0.221496 2.18586 0.221496 1.44757 0.667543 1.00153C1.11359 0.555481 1.85187 0.555481 2.29792 1.00153L12.3263 11.0299C13.1107 11.8143 13.5568 12.8756 13.5568 13.9984C13.5568 15.1212 13.1261 16.1825 12.3263 16.9669L2.29792 26.9953C2.06721 27.2106 1.77497 27.3337 1.48273 27.3337Z"
        fill={active ? "#3B7EC5" : "#BDBDBD"}
      />
    </svg>
  );
}

function LeftArrow(active: boolean) {
  return (
    <svg
      width="14"
      height="28"
      viewBox="0 0 14 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3998 27.3337C12.1076 27.3337 11.8154 27.226 11.5846 26.9953L1.55628 16.9669C-0.0740982 15.3365 -0.0740982 12.6603 1.55628 11.0299L11.5846 1.00153C12.0307 0.555481 12.769 0.555481 13.215 1.00153C13.6611 1.44757 13.6611 2.18586 13.215 2.6319L3.18666 12.6603C2.44837 13.3985 2.44837 14.5983 3.18666 15.3365L13.215 25.3649C13.6611 25.8109 13.6611 26.5492 13.215 26.9953C12.9843 27.2106 12.6921 27.3337 12.3998 27.3337Z"
        fill={active ? "#3B7EC5" : "#BDBDBD"}
      />
    </svg>
  );
}
const Main = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const handleScrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current)
      ref.current.scrollTo({
        left: ref.current.scrollLeft + 240,
        behavior: "smooth",
      });
  };

  const handleScrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current)
      ref.current.scrollTo({
        left: ref.current.scrollLeft - 240,
        behavior: "smooth",
      });
  };
  const navigate = useNavigate();
  return (
    <>
      <SideList />
      <NavBar />
      <BacKground></BacKground>
      <Wrapper>
        <CoursesContainer sx={{ mr: "96px", ml: "96px" }}>
          <CoursesHeader>
            <CoursesHeaderContent>
              <HeaderText>
                <span>Top Trending Courses</span>
                <Link to={"#More"}>More →</Link>
              </HeaderText>
              <HeaderButton>
                <div
                  onClick={() => handleScrollLeft(ref)}
                  style={{ cursor: "pointer" }}
                >
                  {LeftArrow(false)}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleScrollRight(ref)}
                >
                  {RightArrow(true)}
                </div>
              </HeaderButton>
            </CoursesHeaderContent>
            <HeaderLine></HeaderLine>
            <HeaderCircle></HeaderCircle>
          </CoursesHeader>
          <Courses ref={ref}>
            {coursConfig.map(
              (
                {
                  title,
                  attendance,
                  currentPrice,
                  days,
                  hours,
                  mainPrice,
                  offerPercentage,
                  peopleWishNum,
                  rateFromFive,
                  ratesNumber,
                  speakerName,
                  subTitle,
                  onLine,
                  imageUrl,
                },
                i
              ) => (
                <Course
                  key={i}
                  onClick={() => navigate("/course")}
                  imageUrl={imageUrl}
                  onLine={onLine}
                  title={title}
                  attendance={attendance}
                  currentPrice={currentPrice}
                  days={days}
                  hours={hours}
                  mainPrice={mainPrice}
                  offerPercentage={offerPercentage}
                  peopleWishNum={peopleWishNum}
                  rateFromFive={rateFromFive}
                  ratesNumber={ratesNumber}
                  speakerName={speakerName}
                  subTitle={subTitle}
                />
              )
            )}
          </Courses>
        </CoursesContainer>
        <CoursesContainer sx={{ mr: "96px", ml: "96px" }}>
          <CoursesHeader>
            <CoursesHeaderContent>
              <HeaderText>
                <span>Recommended from Us</span>
                <Link to={"#More"}>More →</Link>
              </HeaderText>
              <HeaderButton>
                <div
                  onClick={() => handleScrollLeft(ref2)}
                  style={{ cursor: "pointer" }}
                >
                  {LeftArrow(false)}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleScrollRight(ref2)}
                >
                  {RightArrow(true)}
                </div>
              </HeaderButton>
            </CoursesHeaderContent>
            <HeaderLine></HeaderLine>
            <HeaderCircle></HeaderCircle>
          </CoursesHeader>
          <Courses ref={ref2}>
            {coursConfig.map(
              (
                {
                  title,
                  attendance,
                  currentPrice,
                  days,
                  hours,
                  mainPrice,
                  offerPercentage,
                  peopleWishNum,
                  rateFromFive,
                  ratesNumber,
                  speakerName,
                  subTitle,
                  onLine,
                  imageUrl,
                },
                i
              ) => (
                <Course
                  key={i}
                  imageUrl={imageUrl}
                  onLine={onLine}
                  title={title}
                  attendance={attendance}
                  currentPrice={currentPrice}
                  days={days}
                  hours={hours}
                  mainPrice={mainPrice}
                  offerPercentage={offerPercentage}
                  peopleWishNum={peopleWishNum}
                  rateFromFive={rateFromFive}
                  ratesNumber={ratesNumber}
                  speakerName={speakerName}
                  subTitle={subTitle}
                />
              )
            )}
          </Courses>
        </CoursesContainer>
      </Wrapper>

      <Footer />
    </>
  );
};

export default Main;
