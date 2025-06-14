import { useContext, useRef, useState } from "react";

import { useResizing } from "../../common/hooks/useResizing";
import { useCopySelection } from "../../common/hooks/useCopySelection";
import Toast from "../toast";
import { inputContext } from "../../context/SequenceContext";

function chunkString({ str, chunkSize }: { str: string; chunkSize: number }) {
  const chunks = [];
  if (!chunkSize) {
    return [str];
  }
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }
  return chunks;
}

const getCharWidth = (fontFamily = "monospace", fontSize = "18px") => {
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  span.style.whiteSpace = "pre";
  span.style.fontFamily = fontFamily;
  span.style.fontSize = fontSize;
  span.textContent = "W";
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);
  return width;
};

const colorsArr = [
  "#FFEA00",
  "#67E4A6",
  "#C4C4C4",
  "#FC9CAC",
  "#BB99FF",
  "#80BFFF",
];
const colorsKeys = ["C", "AILMFWYVP", "G", "DE", "KR", "STHQN"];

const Letters = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const handleCopy = (text: string) => {
    setAlertMessage(`Скопировано: ${text}`);
    setAlertOpen(true);
  };

  useCopySelection({
    targetRef: containerRef,
    onCopy: handleCopy,
  });

  let charWidth = getCharWidth();
  let width = useResizing();

  let context = useContext(inputContext);

  let values = context ? context.values : null;
  // let firstValue = values ? values[0] : null;
  // let secondValue = values ? values[1] : null;

  // let length = firstValue ? firstValue.length * charWidth : 0;

  let charsCount = 0;

  // if (width < length) {
  //   charsCount = Math.floor(width / charWidth);
  // }

  // let firstValueCharsArr = firstValue
  //   ? chunkString({ str: firstValue, chunkSize: charsCount })
  //   : null;
  // let secondValueCharsArr = secondValue
  //   ? chunkString({ str: secondValue, chunkSize: charsCount })
  //   : null;

  // console.log(firstValueCharsArr, secondValueCharsArr);

  const firstValue =
    "QWWEQWEQWEWEфывфывQWWEQWEQWEWEфывфывQWWEQWEQWEWEфывфывQWWEQWEQWEWEфывфыв";
  const secondValue =
    "QWWEQWEQWEWEqweqweQWWEQWEQWEWEqweqweQWWEQWEQWEWEqweqweQWWEQWEQWEWEqweqwe";

  const commonStyle: React.CSSProperties = {
    lineHeight: "60px",
    textWrap: "wrap",
    wordBreak: "break-all",
  };

  return (
    <>
      <Toast
        open={alertOpen}
        message={alertMessage}
        onClose={() => setAlertOpen(false)}
      />
      <div
        ref={containerRef}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          flexDirection: "column",
          flexWrap: "wrap",
          fontFamily: "monospace",
          fontSize: "18px",
          position: "relative",
          textAlign: "left",
        }}
      >
        <div
          style={{
            ...commonStyle,
            position: "absolute",
            bottom: 0,
            left: 0,
            transform: "translateY(-30px)",
          }}
        >
          {firstValue}
        </div>
        <div style={{ ...commonStyle }}>{secondValue}</div>
      </div>
    </>
  );
};

export default Letters;
