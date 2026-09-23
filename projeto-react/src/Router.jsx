import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import NotFound from "./Pages/NotFound"
import Nav from "./components/nav"
import Faq from "./Pages/Faq"
import Usuarios from "./Pages/Usuarios"
import Cadastro from "./Pages/Cadastro"
export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/usuarios" element={<Usuarios/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
  )
}
