import styled from "@emotion/styled";
import { Input, OutlinedInput, Box } from "@mui/material";
import ReactFlagsSelect from "react-flags-select";

const FormContainer = styled.div`
  align-items: center;
  position: relative !important;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  justify-content: center;
  justify-items: center;
  gap: 32px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
`;
const PhoneInput = styled(Input)``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 48px 48px 24px 48px;
  gap: 244px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
const Image = styled.img`
  width: 472px;
  height: 728px;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 140px;
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #333333;
  }
`;
const LogButton = styled.button`
  background-image: linear-gradient(
    to right,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );
  padding: 13px 169px 15px 169px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: 0px;
  width: 384px;
  span {
    font-family: "Montserrat";
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    color: #ffffff !important;
    margin: 0px !important;
  }
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
const FlagsSelect = styled(ReactFlagsSelect)`
  margin-right: 12px;

  & .ReactFlagsSelect-module_selectBtn__19wW7 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    span {
      color: #3b7ec5;
    }
    svg {
      width: 24px !important;
      height: 17px !important;
      border-radius: 3px;
    }
    background-color: #f2f2f2;
    border: 0px;
    border-right: 1px solid #e0e0e0;
    border-radius: 10px 0px 0px 10px;
    width: 114px;
  }
`;
const TextInput = styled(OutlinedInput)`
  background-color: #f2f2f2 !important;

  border-radius: 10px;
  * {
    border: 0px !important;
  }
`;
const PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2 !important;
  align-items: center;
  border-radius: 10px;
  width: 384px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
`;
const InputNumber = styled.input`
  outline: none;
  color: #828282;
  background-color: #f2f2f2 !important;
  border: 0px;
  width: 34px;
`;
const LinksRow = styled.div`
  display: flex;

  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #3b7ec5;
  }

  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const BodyContainer = styled(Box)`
  column-gap: 24px;
`;
const ConnectionContainer = styled(Box)``;
const Line = styled.div`
  width: 156px;
  height: 1px;
  background: #e0e0e0;
`;
const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;
const ArrowContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
export {
  ArrowContainer,
  IconImage,
  Line,
  ConnectionContainer,
  BodyContainer,
  LinksContainer,
  InputsContainer,
  LinksRow,
  InputNumber,
  PhoneContainer,
  TextInput,
  FlagsSelect,
  PhoneInput,
  FormContainer,
  Container,
  Image,
  LeftSide,
  LogButton,
  //   PasswordInput,
};
