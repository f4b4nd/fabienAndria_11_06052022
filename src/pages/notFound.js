import { Link } from "react-router-dom"

import HeaderContainer from "../containers/header"

import * as ROUTES from '../constants/routes'

export default function NotFound () {

    return (
        <>
            <HeaderContainer />
            
            <main className="not-found">

                <h1> 404 </h1>

                <div className="alert"> Oups ! La page que vous demandez n'existe pas. </div>

                <Link to={ROUTES.HOME}> Retourner sur la page d'accueil </Link>

            </main>
        </>
    )

}