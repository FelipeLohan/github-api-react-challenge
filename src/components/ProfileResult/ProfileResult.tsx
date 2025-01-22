import styled from "styled-components";

type Props = {
  imageSource: string;
  profileUrl: string;
  followersNumber: string;
  localization: string;
  name: string;
};

const ProfileResultContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 12px;
  gap: 10px;

  img{
    border-radius: 12px;
    width: 20%;
  }
`;
const ProfileResultInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 40px;
  border-radius: 12px;

  h3{
    font-size: 3vmin;
    color: #1890FF;
  }
  
  div p{
    width: 100%;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 8px;
  }
`;

const ProfileResult = ({
  imageSource,
  profileUrl,
  followersNumber,
  localization,
  name,
}: Props) => {
  return (
    <>
      <ProfileResultContainer>
        <img src={imageSource} />
        <ProfileResultInfosContainer>
          <h3>Informações</h3>
          <div>
            <p><strong>Perfil:</strong> {profileUrl}</p>
            <p><strong>Seguidores:</strong> {followersNumber}</p>
            <p><strong>Localidade:</strong> {localization}</p>
            <p><strong>Nome:</strong> {name}</p>
          </div>
        </ProfileResultInfosContainer>
      </ProfileResultContainer>
    </>
  );
};

export { ProfileResult };
