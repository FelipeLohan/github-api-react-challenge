import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import * as githubApi from "../../services/githubApi.ts";

const Form = () => {

  type FormData = {
    username: string;
  }

  const [usernameValue, setUsernameValue] = useState<FormData>({
    username: ""
  })

  function handleButtonClick(e: any){
    e.preventDefault()
    const result = githubApi.findUser(usernameValue);

    return console.log(result)
  }

  function handleInputChange(e: any){
    setUsernameValue(e.target.value);
  }

  return (
    <>
      <h2>Encontre um perfil Github</h2>
      <Input inputType="" inputPlaceholder="Usuário Github" name="username" handleOnChange={handleInputChange} value={usernameValue}/>
      <Button text="Encontrar" handleOnClick={handleButtonClick} />
    </>
  );
};

export { Form };
