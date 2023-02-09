import { AppBar } from "@material-ui/core";
import { pink } from "@mui/material/colors";
import { color } from "@mui/system";
import React from "react";
import { Container, LeftContainer, LogoImage, PagesList } from "./NavBar.Style";
import NavePage from "./NavePage";
import { ExploreIcon } from "./NavePage/Icons";
const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <LeftContainer>
            <LogoImage src={"../assets/images/Logo.svg"} />
            <PagesList>
              <NavePage active={true} pageName="dddd" icon={<ExploreIcon />} />
            </PagesList>
          </LeftContainer>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
