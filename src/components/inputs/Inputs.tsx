import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { inputContext } from "../../context/SequenceContext";
import SubmitButton from "../submit-button";

const aprCharts = [
  "A",
  "R",
  "N",
  "D",
  "C",
  "E",
  "Q",
  "G",
  "H",
  "I",
  "L",
  "K",
  "M",
  "F",
  "P",
  "S",
  "T",
  "W",
  "Y",
  "V",
  "-",
];

const Inputs = () => {
  let context = useContext(inputContext);

  if (!context) return null;

  const { firstInput, secondInput } = context;

  const setAndCheck = (value: string, fn: (value: string) => void) => {
    if (new RegExp(`^([${aprCharts.join("")}]+)?$`).test(value)) {
      fn(value);
    }
  };

  const submit = () => {
    context.setValues([firstInput, secondInput]);
  };

  return (
    <div
      className="inputs"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span style={{ marginBottom: "10px", marginRight: "20px" }}>
        <TextField
          id="frst-sequence"
          label="Первая поледовательность"
          variant="outlined"
          value={firstInput}
          onChange={(e) =>
            setAndCheck(e.target.value.toUpperCase(), context.setFirstInput)
          }
        />
      </span>
      <span style={{ marginRight: "20px", marginBottom: "10px" }}>
        <TextField
          id="second-sequence"
          label="Вторая поледовательность"
          variant="outlined"
          value={secondInput}
          onChange={(e) =>
            setAndCheck(e.target.value.toUpperCase(), context.setSecondInput)
          }
        />
      </span>
      <span style={{ marginRight: "20px", marginBottom: "10px" }}>
        <SubmitButton
          title="Выровнять"
          disabled={firstInput.length !== secondInput.length}
          onClick={submit}
        />
      </span>
    </div>
  );
};

export default Inputs;
