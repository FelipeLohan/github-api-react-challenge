import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

const Form = () => {

  type FormData = {
    username: string;
  }

  const [usernameValue, setUsernameValue] = useState<FormData>({
    username: ""
  })

  function handleButtonClick(e: any){
    e.preventDefault()
    
    return(
      <>
      
      </>
    )

  }

  function handleInputChange(e: any){
    setUsernameValue(e.target.value);
  }

  return (
    <>
      <h2>Encontre um perfil Github</h2>
      <Input inputType="" inputPlaceholder="Usuário Github" name="username" handleOnChange={handleInputChange} value={usernameValue}/>
      <Button text="Encontrar" handleOnClick="" />
    </>
  );
};

export { Form };
