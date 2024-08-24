import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.tsx";
import { Header } from "./features/Header.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
