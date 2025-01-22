import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import * as githubApi from "../../services/githubApi.ts";
import { ProfileResult } from "../ProfileResult/ProfileResult.tsx";
import styled from "styled-components";

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
  background-color: #E6F7FF;
  padding: 40px;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 40px;
  
  h2{
    font-size: 3.5vmin;
    color: #262626;
  }

  div {
    display: flex;
    gap: 10px;
  }

  div input{
    width: 20%;
  }
`;

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
  });

  async function handleButtonClick(e: any) {
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

    setResultData(ResultData);
  }

  function handleInputChange(e: any) {
    console.log(e.target.value);
    setUsernameValue(e.target.value);
  }

  return (
    <>
      <FormContainer>
        <h2>Encontre um perfil Github</h2>
        <div>
          <Input
            inputType=""
            inputPlaceholder="Usuário Github"
            name="username"
            handleOnChange={handleInputChange}
            value={usernameValue.username}
          />
          <Button text="Encontrar" handleOnClick={handleButtonClick} />
        </div>
      </FormContainer>

      {resultData.name && (
        <ProfileResult
          imageSource={resultData.avatarUrl}
          profileUrl={resultData.profileUrl}
          followersNumber={resultData.followers}
          localization={resultData.location}
          name={resultData.name}
        />
      )}
    </>
  );
};

export { Form };
