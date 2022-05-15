import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

export default function useContent ({filterID}) {
    
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
            .then(data => {
                if (filterID) {
                    const match = data.find(house => house.id === filterID) || false
                    if (match) {
                        setContent(match)
                    } 
                    else {
                        navigate(ROUTES.NOT_FOUND_404)
                    }
                }
                else {
                    setContent(data)
                }
            })
            .catch((error) => {
                console.log(error.message)
            })
    })

    return content

}