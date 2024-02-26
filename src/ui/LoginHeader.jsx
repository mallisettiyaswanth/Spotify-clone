import styled from "styled-components";

const Header = styled.div`
  height: 3rem;
  width: 100%;
  background-color: #121212;
  display: flex;
  align-items: center;
  padding: 3rem;
  gap: 1rem;

  & h1 {
    font-family: var(--font-roboto-100);
    font-weight: bolder;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 3rem;
  width: 3rem;
`;


const LoginHeader = () => {
    return <Header>
    <Image src="/spotify.png" alt="" />
    <h1>Spotify</h1>
  </Header>
};

export default LoginHeader;