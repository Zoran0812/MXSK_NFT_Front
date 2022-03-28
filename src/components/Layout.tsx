import styled from "styled-components";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const MainArea = styled.div`
  min-height: calc(100vh);
`;

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header/>
      <MainArea>{children}</MainArea>
      <Footer />
    </div>
  );
};

export default Layout;
