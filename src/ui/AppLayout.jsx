import { Outlet } from "react-router-dom";
import Sidbar from "./Sidbar";
import Header from "./Header";
import styled from "styled-components";

const StyleAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4%.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <StyleAppLayout>
      <Header />
      <Sidbar />
      <Main>
        <Outlet />
      </Main>
    </StyleAppLayout>
  );
}

export default AppLayout;
