import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNodeServer } from "../hooks/useNodeServer";

const SentenceContainer = ({ URL, placeholder }) => {
  const { sendData } = useNodeServer();
  const [sentence, setSentence] = useState("");
  const [isTranslated, setIstranslated] = useState(false);
  const [translated, setTranslated] = useState("");
  const [empty,setEmpty] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(sentence === ""){
      setEmpty(true)
      return
    }
    const res = await sendData(URL, { sentence });
    setTranslated(res?.data?.status);
    setIstranslated(true);
  };
  useEffect(() => {
    setIstranslated(false);
    setEmpty(false)
  }, [sentence]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {isTranslated && (
          <div>
            <p>{translated}</p>
          </div>
        )}
        {
          empty && <p>Please enter something first </p>
        }
        <input
          type="text"
          placeholder={placeholder}
          name="sentence"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <button type="submit">Translate</button>
      </form>
    </Container>
  );
};

export default SentenceContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 550px;
  margin: auto;
  z-index: 999;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 10px;

    input {
      width: 100%;
      padding: 1rem;
      font-size: 25px;
      background-color: aliceblue;
      outline: none;
      border: 2px solid black;
      border-radius: 10px;
      opacity: 0.5;
      color: #000;

      &:focus {
        opacity: 1;
      }

      @media (max-width: 400px) {
        width: 100%;
        padding: 0.5rem;
        font-size: 15px;
      }
      &::placeholder {
        font-size: 20px;

        @media (max-width: 400px) {
          font-size: 13px;
        }
      }

      @media (max-width: 950px) {
        /* margin-top: 80px; */
      }
    }

    button {
      padding: 1rem;
      background-color: #24a0ed;
      font-size: 20px;
      opacity: 0.7;
      border-radius: 10px;

      &:hover {
        opacity: 1;
      }
      @media (max-width: 400px) {
        padding: 0.5rem;
        font-size: 15px;
      }
    }
    div {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: .3rem 1rem;
      p {
        color: #000;
      }
    }
  }
  @media (max-width: 950px) {
        margin: 0 auto;
      }
`;
