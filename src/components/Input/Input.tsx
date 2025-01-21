import styled from "styled-components"

const InputStyled = styled.input`
  padding: 10px;
  border: 2px solid #BFBFBF;
  border-radius: 8px;
  background-color: #fff;

  &::placeholder{
    color: #BFBFBF;
  }
`

type Props = {
  inputType: string;
  inputPlaceholder: string;
}

const Input = ({inputType, inputPlaceholder}: Props) => {
  return(
    <>
    <InputStyled type={inputType} placeholder={inputPlaceholder} />
    </>
  )
}

export { Input }