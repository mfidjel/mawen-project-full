import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hey guy !
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE}/>
      </form>
    </div>
  );
}

export default App;
