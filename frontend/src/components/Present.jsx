import { SentenceContainer } from ".";

const Present = () => {
  const URL = "https://sentenceapi.netlify.app/.netlify/functions/index/convert/present";

  return (
    <SentenceContainer
      URL={URL}
      placeholder={"Enter past or future sentence..."}
    />
  );
};

export default Present;
