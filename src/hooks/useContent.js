import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

export default function useContent ({filterDataID}) {
    
    const [content, setContent] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

        fetch(`${apiURL}/logements.json`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }
            })
            .then(response => response.json())
            .then(datas => {

                if (filterDataID) {

                    const match = datas.find(data => data.id === filterDataID) || false

                    if (match) {
                        setContent(match)
                    }
                    else {
                        navigate(ROUTES.NOT_FOUND_404)
                    }
                    return
                }

                setContent(datas)

            })
            .catch((error) => {
                console.log(error.message)
            })
    })

    return content

}