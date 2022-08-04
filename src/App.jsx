import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const state = useSelector((state) => state.test);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(state);
  });
  return (
    <div
      onClick={() => {
        dispatch({
          type: "show",
          data: "vashu",
        });
      }}
    >
      App
    </div>
  );
};

export default App;
