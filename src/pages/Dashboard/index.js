import React, { useContext, useState } from "react";
import { MainContext } from "../../hooks/index.reducer";
import { Container, Title } from "./styles";

export const Component = () => {
  const { state } = useContext(MainContext);
  const [messageIsShown, showMessage] = useState(false);

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
      </section>
    </Container>
  );
};
