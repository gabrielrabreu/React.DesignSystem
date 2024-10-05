import { type FC } from "react";
import styled from "styled-components";

const StyledApp = styled.div`
  background-color: blue;
  color: white;
`;

const App: FC = () => {
  return <StyledApp>App.tsx</StyledApp>;
};

export default App;
