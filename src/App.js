import React from "react";
import { MainProvider } from "./hooks/index.reducer";
import { Component as Dashboard } from "./pages/Dashboard";
import { Global } from "./styles";

function App() {
  return (
    <>
      <Global />
      <MainProvider>
        <Dashboard />
      </MainProvider>
    </>
  );
}

export default App;
