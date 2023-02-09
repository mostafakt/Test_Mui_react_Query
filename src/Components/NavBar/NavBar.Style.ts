import { Box } from "@material-ui/core";
import styled from "styled-components";

const Container = styled(Box)`
  background-color: #f6f9fd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 48px 24px 24px 96px;
  flex-wrap: wrap;
`;
const LeftContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
`;

const LogoImage = styled.img``;
const PagesList = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
`;
export { Container, LeftContainer, LogoImage, PagesList };
