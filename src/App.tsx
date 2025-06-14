import "./App.css";
import { SequenceContext } from "./context/SequenceContext";

import Inputs from "./components/inputs";
import Letters from "./components/letters";

function App() {
  return (
    <div className="App">
      <SequenceContext>
        <Inputs />
        <Letters />
      </SequenceContext>
    </div>
  );
}

export default App;
