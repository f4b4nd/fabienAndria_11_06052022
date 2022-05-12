import { useState, useEffect } from "react"

export default function useContent (target) {
    
    const [content, setContent] = useState([])

    useEffect(() => {
        fetch("./logements.json", {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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