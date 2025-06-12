import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { LayoutMain, LayoutRoot } from "./LayoutStyles.styled";

export default function Layout() {
  return (
    <LayoutRoot>
      <Header />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
      <Footer />
    </LayoutRoot>
  );
}
