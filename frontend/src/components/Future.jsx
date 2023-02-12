import { SentenceContainer } from ".";

const Future = () => {
  const URL = "https://sentenceapi.netlify.app/.netlify/functions/index/convert/future";

  return (
    <SentenceContainer
      URL={URL}
      placeholder={"Enter present or past sentence..."}
    />
  );
};

export default Future;
