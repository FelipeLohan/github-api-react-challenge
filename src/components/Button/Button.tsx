import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #1890FF;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  color: #fff;
`

type Props = {
  text: string;
  handleOnClick: any;
}

const Button = ({text, handleOnClick}: Props) => {

  return(
    <>
    <ButtonStyled onClick={handleOnClick}>{text}</ButtonStyled>
    </>
  )
}

export { Button }