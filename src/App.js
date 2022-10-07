import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/InputForm";
import Lists from "./components/Lists";

const App = () => {
  return (
    <main>
      <h1 className="d-flex justify-content-center mt-3">TO DO LIST</h1>
      <InputForm />
      <Lists />
    </main>
  );
};

export default App;
