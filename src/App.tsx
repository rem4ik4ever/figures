import styled from "styled-components";
import Controls from "./components/Controls";
import Figure from "./components/Figure";
import { DrawProvider } from "./context";

const Main = styled.div`
  position: relative;
  height: 100vh;
`;

const SvgBox = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
`;

const ControlsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid #ccc;
  width: 270px;
  height: 100%;
`;

export default function App() {
  return (
    <DrawProvider>
      <Main className="App">
        <div>
          <SvgBox>
            <Figure />
          </SvgBox>

          <ControlsContainer>
            <Controls />
          </ControlsContainer>
        </div>
      </Main>
    </DrawProvider>
  );
}
