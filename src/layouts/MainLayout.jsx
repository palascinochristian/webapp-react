import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLoadingContext } from "../contexts/Loading";
import Loader from "../components/ui/Loader";

export default function MainLayout() {
  const { isLoading } = useLoadingContext();
  return (
    <>
      <Header />
      <main className="py-12 grow">{isLoading ? <Loader /> : <Outlet />}</main>
      <Footer />
    </>
  );
}
