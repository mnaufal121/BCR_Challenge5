import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import DetailProduct from './components/pages/detailProduct';

const RouteApp = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/detail/:idCar" element={<DetailProduct />} />
                    
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteApp