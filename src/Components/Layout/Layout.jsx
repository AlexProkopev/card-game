import { Container } from "@mui/material";
import TopBar from "../TopBar/TopBar";

function Layout({ children }) {
  return (
    <Container>
      <header>
        <TopBar />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </Container>
  );
}

export default Layout;
