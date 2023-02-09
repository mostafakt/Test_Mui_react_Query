import { SvgIconProps } from "@material-ui/core";
import { Box } from "@mui/material";
import { ReactElement } from "react";
import { ButtomLine, Container } from "./NavePage.Style";
interface INavPage {
  pageName: string;
  active: boolean;
  icon: ReactElement;
}
const NavePage = ({ active, icon, pageName }: INavPage) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Container active={active}>
          {icon}
          <span>{pageName}</span>
        </Container>
        <ButtomLine></ButtomLine>
      </Box>
    </>
  );
};

export default NavePage;
