import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #1890ff;
  color: #fff;
`;

const HeaderContentContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 40px 0px;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContentContainer>
          <h1>Github API</h1>
        </HeaderContentContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };
