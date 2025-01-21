import styled from "styled-components"

type Props = {
  imageSource: string;
  profileUrl: string;
  followersNumber: string;
  localization: string;
  name: string;
}

const ProfileResultContainer = styled.div`
  display: flex;

`
const ProfileResultInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileResult = ({imageSource, profileUrl, followersNumber, localization, name}: Props) => {
  return(
    <>
    <ProfileResultContainer>
      <img src={imageSource} />
      <ProfileResultInfosContainer>
        <h3>Informações</h3>
        <p>Perfil: {profileUrl}</p>
        <p>Seguidores: {followersNumber}</p>
        <p>Localidade: {localization}</p>
        <p>Nome: {name}</p>
      </ProfileResultInfosContainer>
    </ProfileResultContainer>
    </>
  )
}

export { ProfileResult }