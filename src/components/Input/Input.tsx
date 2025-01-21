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
  name: string;
  handleOnChange: any;
  value: string;
}

const Input = ({inputType, inputPlaceholder, name, handleOnChange, value}: Props) => {
  return(
    <>
    <InputStyled name={name} type={inputType} placeholder={inputPlaceholder} onChange={handleOnChange} value={value} />
    </>
  )
}

export { Input }