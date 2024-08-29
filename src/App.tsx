import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.tsx";
import { Header } from "./features/Header.tsx";
import { ProductMain } from "./pages/products/Product-main.tsx";
import {Provider} from "react-redux";
import { store } from "./store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductMain/>}/>

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
