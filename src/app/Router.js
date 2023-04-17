import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Layout from "./Layout";
import ItemListContainer from "../Pages/ItemListContainer";
import Contacto from "../Pages/Contac";
import {Car} from '../Pages/Car'
import ItemDetailContainer from "../Pages/ItemDetailContainer";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/UniversalMarket"  element={<Home />} />
                
                <Route path="/UniversalMarket/productos" element={<ItemListContainer />} />
                <Route path="/UniversalMarket/productos/:idCategoria" element={<ItemListContainer />} />
                <Route path="/UniversalMarket/productos/item/:id" element={<ItemDetailContainer />} />
                <Route path="/UniversalMarket/productos/item/:id" element={<ItemDetailContainer />} />
                
                
                <Route path="/UniversalMarket/contacto" element={<Contacto />} />
                <Route path="/UniversalMarket/car"  element={<Car />} />

            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;