import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import Home from './pages/home'
import Apartment from './pages/apartment'
import Error404 from './pages/404'

function App() {
    return (
        <Router>
            <Routes>
            
                <Route exact path={ROUTES.HOME} element={
                    <>
                        <Home/>
                    </>
                }/>

                <Route exact path={ROUTES.APARTMENT} element={
                    <>
                        <Apartment/>
                    </>
                }/>

                <Route exact path={ROUTES.ERROR404} element={
                    <>
                        <Error404/>
                    </>
                }/>
            </Routes>

        </Router>
    )
}

export default App
