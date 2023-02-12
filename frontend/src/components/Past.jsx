import { SentenceContainer } from ".";

const Past = () => {
  const URL = "https://sentenceapi.netlify.app/.netlify/functions/index/convert/past";
  return (
    <SentenceContainer
      URL={URL}
      placeholder={"Enter present or future sentence..."}
    />
  );
};

export default Past;