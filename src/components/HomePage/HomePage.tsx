import styled from "styled-components";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

const HomePageContainer = styled.section`

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  margin: 0 auto;
  padding-top: 40px;
  
  h1{
    font-size: 5vmin;
  }

  h2{
    font-size: 3.5vmin;
    color: #7E7E7E;
  }

  button{
    width: 10%;
  }
`;

const HomePage = () => {

  const navigate = useNavigate()

  function handleButtonClick(e: any){
    e.preventDefault()
    navigate("/search-profile")
  } 


  return (
    <>
      <HomePageContainer>
        <h1>Desafio Github API</h1>
        <h2>Felipe Lohan</h2>
        <Button text="Começar" handleOnClick={handleButtonClick}/>
      </HomePageContainer>
    </>
  );
};

export { HomePage };
