import { useState } from "react";

const UseReducerEx3 = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [state4, setState4] = useState(0);

  return (
    <>
      <input
        type="number"
        value={state1}
        onChange={(e) => setState1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={state2}
        onChange={(e) => setState2(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={state3}
        onChange={(e) => setState3(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={state4}
        onChange={(e) => setState4(parseInt(e.target.value))}
      />
    </>
  );
};

export default UseReducerEx3;
