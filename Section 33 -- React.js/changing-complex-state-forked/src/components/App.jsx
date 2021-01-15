import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function handleChange(event) {
    const inputName = event.target.name;
    const updatedText = event.target.value;

    setFullName((prevValue) => {
      return inputName === "fName"
        ? { fName: updatedText, lName: prevValue.lName }
        : { lName: updatedText, fName: prevValue.fName };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
