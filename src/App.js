import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInc, setDec } from "./Redux/Actions/actions";

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1>Count {count}</h1>
      <div>
        <button
          style={{ margin: "1em" }}
          onClick={() => dispatch(setInc(count))}
        >
          Increment
        </button>
        <button
          style={{ margin: "1em" }}
          onClick={() => dispatch(setDec(count))}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default App;
