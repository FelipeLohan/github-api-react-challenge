import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import * as githubApi from "../../services/githubApi.ts";
import { ProfileResult } from "../ProfileResult/ProfileResult.tsx";

const Form = () => {
  type FormData = {
    username: string;
  };

  const [usernameValue, setUsernameValue] = useState<FormData>({
    username: "",
  });

  const [resultData, setResultData] = useState({
    avatarUrl: "",
      followers: "",
      location: "",
      name: "",
      profileUrl: "",
  })

  async function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let result;
    try {
      result = await githubApi.findUser(usernameValue);
      console.log(usernameValue);
      console.log(result);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }

    const ResultData: object = {
      avatarUrl: result.data.avatar_url,
      followers: result.data.followers,
      location: result.data.location,
      name: result.data.name,
      profileUrl: result.data.html_url, 
    };

    setResultData(ResultData)

    
  }

  function handleInputChange(e: any) {
    console.log(e.target.value);
    setUsernameValue(e.target.value);
  }

  return (
    <>
      <h2>Encontre um perfil Github</h2>
      <Input
        inputType=""
        inputPlaceholder="Usuário Github"
        name="username"
        handleOnChange={handleInputChange}
        value={usernameValue.username}
      />
      <Button text="Encontrar" handleOnClick={handleButtonClick} />

      {
        resultData && 
        <ProfileResult
        imageSource={resultData.avatarUrl}
        profileUrl={resultData.profileUrl}
        followersNumber={resultData.followers}
        localization={resultData.location}
        name={resultData.name}
        />
      }
    </>
  );
};

export { Form };
