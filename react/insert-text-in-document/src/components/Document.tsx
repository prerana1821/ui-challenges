import { useState } from "react";

export const Document = () => {
  const [input, setInput] = useState("");
  const [documentText, setDocumentText] = useState("");

  return (
    <div>
      <textarea
        name='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id='input'
        cols={30}
        rows={10}
        placeholder='Enter your text here'
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setDocumentText((prevDocText) => {
              return prevDocText + `<p class="blue">${input}</p>`;
            });
            setInput("");

            setTimeout(() => {
              setDocumentText((prevDocText) => {
                return prevDocText.replace(`class="blue"`, `class=""`);
              });
            }, 2000);
          }
        }}
      ></textarea>

      <p>Document</p>
      {documentText ? (
        <div
          className='document'
          dangerouslySetInnerHTML={{ __html: documentText }}
        ></div>
      ) : (
        <div className='document'>Added content will show here.</div>
      )}
    </div>
  );
};
