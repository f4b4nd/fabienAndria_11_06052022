import { useState, useEffect } from "react"

export default function useContent (target) {
    
    const [content, setContent] = useState([])

    useEffect(() => {

        const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

        fetch(`${apiURL}/logements.json`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }
            })
            .then(response => response.json())
            .then(data => setContent(data))
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return {[target]: content}

}