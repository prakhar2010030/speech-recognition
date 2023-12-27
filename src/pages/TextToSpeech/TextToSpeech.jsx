import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();
  const submit = () => {
    console.log(text);
    console.log(speak);
    speak({ text:text });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Text To <span className="px-3 bg-info rounded">Voice</span></h1>

      <div className="bg-tertiary d-flex flex-column  justify-content-center my-5 ">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          cols="70"
          rows="10"
          className="p-2"
        ></textarea>
        <div className="mx-auto">
          <button
            className="mt-5 p-2 btn bg-primary text-white"
            onClick={submit}
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
