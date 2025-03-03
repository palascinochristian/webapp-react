import { BrowserRouter, Routes, Route } from "react-router";
//Layout
import MainLayout from "./layouts/MainLayout";
//Pages
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import NotFound from "./pages/NotFound";
import { LoadingProvider } from "./contexts/Loading";

export default function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}
