/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import {
  FormContainer,
  Container,
  Image,
  LeftSide,
  LogButton,
  FlagsSelect,
  TextInput,
  PhoneContainer,
  InputNumber,
  LinksRow,
  InputsContainer,
  LinksContainer,
  BodyContainer,
  ConnectionContainer,
  Line,
  IconImage,
  ArrowContainer,
} from "./Login.style";
import { FormControl, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@material-ui/icons";
export const gitHeader = () => {
  const token =
    "Token " +
    String(localStorage?.getItem("token")).substring(
      1,
      String(localStorage.getItem("token")).length - 1
    );
  console.log(token);
  return {
    Authorization: token,
  };
};
const Login = () => {
  const [selected, setSelected] = useState("SY");
  const [phoneNumber, setPhoneNumber] = useState({
    code: "+963",
    first: "",
    secound: "",
    therd: "",
  });

  const [password, setPassword] = useState("");

  const { data, isLoading, mutate } = useMutation({
    mutationFn: (val: { password: string; phone_number: string }) =>
      axios.post("https://torbet.perla-tech.com/log_in", val),
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Container>
        <ArrowContainer>
          <img
            onClick={() => navigate("/")}
            src={process.env.PUBLIC_URL + "/assets/Icons/Arrow-Left Icon.svg"}
          />
        </ArrowContainer>
        <LeftSide>
          <p>Login</p>

          <BodyContainer display={"flex"} flexDirection={"column"} gap={"24px"}>
            <FormContainer>
              <InputsContainer>
                <PhoneContainer>
                  <FlagsSelect
                    customLabels={{
                      US: { primary: "EN-US", secondary: "+1" },
                      GB: { primary: "EN-GB", secondary: "+44" },
                      SY: { primary: "EN-GB", secondary: "+963" },
                      FR: { primary: "FR" },
                    }}
                    showSecondarySelectedLabel={true}
                    showSelectedLabel={false}
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                  />
                  <InputNumber
                    placeholder="000"
                    type={"text"}
                    inputMode="numeric"
                    value={phoneNumber.first}
                    onChange={(val) => {
                      setPhoneNumber({
                        ...phoneNumber,
                        first: val.target.value,
                      });
                    }}
                  />
                  -
                  <InputNumber
                    placeholder="000"
                    value={phoneNumber.secound}
                    onChange={(val) => {
                      setPhoneNumber({
                        ...phoneNumber,
                        secound: val.target.value,
                      });
                    }}
                  />
                  -
                  <InputNumber
                    placeholder="000"
                    value={phoneNumber.therd}
                    onChange={(val) => {
                      setPhoneNumber({
                        ...phoneNumber,
                        therd: val.target.value,
                      });
                    }}
                  />
                </PhoneContainer>
                <FormControl
                  sx={{ m: 1, width: "384px", margin: "0px" }}
                  variant="standard"
                >
                  <TextInput
                    value={password}
                    onChange={(val) => {
                      setPassword(val.target.value);
                    }}
                    id="outlined-adornment-password"
                    type={!showPassword ? "password" : "text"}
                    endAdornment={
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    }
                    placeholder="Password"
                  />
                </FormControl>
              </InputsContainer>
              <LinksContainer>
                <LogButton
                  onClick={() => {
                    mutate({
                      password: password,
                      phone_number:
                        phoneNumber.code +
                        phoneNumber.first +
                        phoneNumber.secound +
                        phoneNumber.therd,
                    });
                  }}
                >
                  <span>Login</span>
                </LogButton>
                <LinksRow>
                  <span>Forgot Password?</span>
                  <a href="#SignUp">Sign Up →</a>
                </LinksRow>
              </LinksContainer>
            </FormContainer>
            <ConnectionContainer
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <Line></Line>
              <IconImage src={"../assets/Icons/Facebook Logo.png"} />
              <IconImage src={"../assets/Icons/Google Logo.png"} />
              <Line></Line>
            </ConnectionContainer>
          </BodyContainer>
        </LeftSide>
        <Image src={"../assets/images/login.png"} />
      </Container>
    </>
  );
};

export default Login;
