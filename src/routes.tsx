import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListarContato from "./pages/ListarContato"
import CadastrarContato from "./pages/CadastrarContato"
import PaginaPadrao from "./pages/PaginaPadrao"
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}> 
                    <Route index element={<ListarContato />} />
                    <Route path="/contato/cadastrar" element={<CadastrarContato />} /> 
                </Route>
                <Route path="*" element={<PaginaNaoEncontrada />} />                
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRoutes