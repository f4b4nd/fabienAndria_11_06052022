import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import Home from './pages/home'
import House from './pages/house'
import About from './pages/about'
import NotFound from './pages/notFound'

export default function App () {
    return (
        <Router basename={process.env.REACT_APP_ROOT_FOLDER || '/'}>

            <Routes>
            
                <Route exact path={ROUTES.HOME} element={<Home/>} />

                <Route path={ROUTES.HOUSE + '/:id'} element={<House/>} />

                <Route exact path={ROUTES.ABOUT} element={<About/>} />

                <Route path="*" element={<NotFound/>} />

            </Routes>

        </Router>
    )
}
