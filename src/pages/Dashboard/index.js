import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../hooks/index.reducer";
import { Container, Title } from "./styles";
import useUsersInfoApi from "../../hooks/Users";

export const Component = () => {
  const { state } = useContext(MainContext);
  const [messageIsShown, showMessage] = useState(false);
  const { getUsersInfo } = useUsersInfoApi();

  useEffect(() => {
    getUsersInfo();
  }, [getUsersInfo]);

  return (
    <Container>
      <Title data-testid="header">Hi!</Title>
      <section>
        <button
          data-testid="button"
          onClick={() => showMessage(!messageIsShown)}
        >
          Click Me!
        </button>
        {messageIsShown && <p>Hi again!</p>}
        {state.users.data &&
          state.users.data.map((element, index) => (
            <p key={index}>{element.first_name}</p>
          ))}
      </section>
    </Container>
  );
};
