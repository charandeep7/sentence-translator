import styled from "styled-components";
import { Card, HowItWorks, Past , Present , Future } from "../components";
import { color } from "../theme/color";
import { random } from "glowing-engine";
import { useTranslation } from "../hooks/useTranslation";

const Home = () => {
  const { tense, setTense } = useTranslation();
  return (
    <Container>
        <Title>Advanced Translator</Title>
      <Wrapper>
        <Card />
        <HowItWorks />
      </Wrapper>
      {
        tense?.past && <Past /> || tense?.present && <Present /> || tense?.future && <Future /> 
      }
      <Fixed><a href="https://github.com/charandeep7/sentence-translator" target="_blank" key="github">GITHUB</a></Fixed>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Title = styled.h1`
    text-align: center;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`

const Fixed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60px;
  background-color: red;
  a{
    text-decoration: none;
    color: #fff;
  }
`