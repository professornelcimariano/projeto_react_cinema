import Home from "pages/Home";
import Menu from "components/Menu";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;