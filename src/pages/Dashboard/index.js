import React, { useContext } from "react";
import { MainContext } from "../../hooks/index.reducer";
import { Title } from "./styles";

export const Component = () => {
  const { state } = useContext(MainContext);

  console.log(state);

  return <Title>Hi!</Title>;
};
