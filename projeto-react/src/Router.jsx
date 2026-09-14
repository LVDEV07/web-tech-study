import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import NotFound from "./Pages/NotFound"
import Nav from "./components/nav"
import Faq from "./Pages/Faq"

export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
  )
}
