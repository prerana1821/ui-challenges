import React, { useState } from "react";
import { staticCode } from "./sampleCode";

export default function TextGenerate() {
  const [data, setData] = useState("");

  const generateText = () => {
    if (data === "") {
      const words = staticCode.split(" ");
      let index = 0;
      const interval = setInterval(() => {
        setData((prevText) => prevText + " " + words[index]);
        index++;
        if (index === words.length) {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  return (
    <div>
      <div className='actions'>
        <button className='button' onClick={generateText}>
          Start Generating
        </button>
        <button
          className='button'
          onClick={() => {
            setData("");
          }}
        >
          Reset
        </button>
      </div>

      <div className='display-data'>{data}</div>
    </div>
  );
}
