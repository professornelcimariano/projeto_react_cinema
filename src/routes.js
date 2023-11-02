import Home from "pages/Home";
import Filme from "pages/Filme";
import Menu from "components/Menu";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="filme/:titleurl" element={<Filme />}></Route>
                {/* <Route path="/Contato" element={<Contato />}></Route> */}
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;