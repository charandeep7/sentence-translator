import styled from "styled-components";
import { workinglogo } from "../assets";

const Card = () => {
  return (
    <Book>
      <Page>
        <Cover className="cover">
          <p>How it works ?</p>
          <img src={workinglogo} alt="" />
        </Cover>
        <Content className="content">
          <Description>
           It works on the techniques of <b>Natural Language Processing.</b>
           <br />
           <br />It uses artificial intelligence to take real-world input, process it, and make sense of it in a way a computer can understand.
           <br /><br />
           <b>React</b> and <b>Nodejs</b> has been used in this project.
           <br />
          </Description>
        </Content>
      </Page>
    </Book>
  );
};

export default Card;

const Book = styled.div`
  height: 15rem;
  width: 15rem;
  font-size: 1.4rem;
  box-shadow: 1rem 2rem 3rem rgba(#000, 0.25);
  text-align: center;
  position: relative;
  color: #484e4a;
  transition: all 250ms linear;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 41px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;

const Page = styled.div`
  width: 100%;
  height: 20rem;
  perspective: 1500px;

  &:hover .cover {
    transform: rotateY(-180deg);
    box-shadow: 1.5rem 2rem 3rem rgba(#000, 0.25);

    &::after {
      // Back of first page hover
      opacity: 1;
    }
  }
`;

const Cover = styled.div`
  background-color: #0d5c63;
  color: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden; // Allows to add padding and margin to rear pseudo element
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  transition: all 1s 0.3s;
  transform-origin: 0 50%;
  z-index: 2;

  &::after {
    // Back of first page
    content: "Developed by <>KITISH</>";
    color: #eff0eb;
    position: absolute;
    padding-top: 1.5rem;
    top: 0;
    left: 0;
    background-color: #424b54;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transform: rotateY(180deg);
    transition: all 0.3s 0.5s;
  }

  p {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  img {
    height: 250px;
    width: 250px;
    object-fit: contain;
  }
`;

const Content = styled.div`
  background-color: #baa898;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    width: 80%;
    padding: 1rem;
    background-color: #24a0ed;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Description = styled.p`
  font-size: 18px;
  text-align: left;
  padding: 3px;
  b{
    font-size: 15px;
  }
`;
