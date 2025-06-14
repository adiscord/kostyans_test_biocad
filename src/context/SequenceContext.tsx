import React, { createContext, Dispatch, useState } from "react";

interface inputContextTypes {
  firstInput: string;
  setFirstInput: Dispatch<React.SetStateAction<string>>;
  secondInput: string;
  setSecondInput: Dispatch<React.SetStateAction<string>>;
  values: string[];
  setValues: Dispatch<React.SetStateAction<string[]>>;
}

export let inputContext = createContext<inputContextTypes>({
  firstInput: "",
  setFirstInput: () => {},
  secondInput: "",
  setSecondInput: () => {},
  values: [],
  setValues: () => {},
});

export const SequenceContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let [firstInput, setFirstInput] = useState<string>("");
  let [secondInput, setSecondInput] = useState<string>("");
  let [values, setValues] = useState<string[]>([]);

  const value: inputContextTypes | null = {
    firstInput: firstInput,
    setFirstInput: setFirstInput,
    secondInput: secondInput,
    setSecondInput: setSecondInput,
    values: values,
    setValues: setValues,
  };

  return (
    <inputContext.Provider value={value}>{children}</inputContext.Provider>
  );
};
