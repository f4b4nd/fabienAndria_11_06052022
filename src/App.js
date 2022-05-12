import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import Home from './pages/home'
import Apartment from './pages/apartment'
import NotFound from './pages/notFound'

export default function App () {
    return (
        <Router>

            <Routes>
            
                <Route exact path={ROUTES.HOME} element={<Home/>} />

                <Route exact path={ROUTES.APARTMENT} element={<Apartment/>} />

                <Route path="*" element={<NotFound/>} />

            </Routes>

        </Router>
    )
}
