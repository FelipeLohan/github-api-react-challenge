import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #1890FF;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  color: #fff;

  &:hover{
    cursor: pointer;
    transition: 0.2s;
    background-color:rgb(8, 119, 223)
  }
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