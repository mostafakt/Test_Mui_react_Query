/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import "react-phone-input-2/lib/style.css";

import {
  // PhoneInput,
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
  // PasswordInput,
} from "./Login.style";
import { FormControl, IconButton, OutlinedInput } from "@mui/material";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
import { Grid } from "@material-ui/core";
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

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone: string) => {
    setPhone(newPhone);
  };

  const { data, isLoading } = useQuery("fetch", () =>
    axios.post("http://127.0.0.1:8000/api-token-auth/", {
      username: userName,
      password: password,
    })
  );
  const navigate = useNavigate();
  const submit = async () => {
    await axios
      .post("http://127.0.0.1:8000/api-token-auth/", {
        username: userName,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      });
  };
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
                <LogButton>
                  <span>Login</span>
                </LogButton>
                <LinksRow>
                  <span>Forgot Password?</span>
                  <a href="">Sign Up →</a>
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
