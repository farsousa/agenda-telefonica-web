import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListarContato from "./pages/ListarContato"
import CadastrarContato from "./pages/CadastrarContato"
import PaginaPadrao from "./pages/PaginaPadrao"
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada"
import DetalharContato from "./pages/DetalharContato"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}> 
                    <Route index element={<ListarContato />} />
                    <Route path="/cadastrar" element={<CadastrarContato />} /> 
                    <Route path="/detalhar/:id" element={<DetalharContato />} /> 
                </Route>
                <Route path="*" element={<PaginaNaoEncontrada />} />                
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRoutes