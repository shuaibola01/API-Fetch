import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [todo, setTodo] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then((res)=>{
                if(!res){
                    throw Error ('Cannot fetch Data, Please try again later')
                }
                return res.json()
            })
            .then((data)=>{
                setTodo(data)
                setLoading(false)
                setError(false)
            })
            .catch((err)=>{
                setError(err.message)
                setLoading(false)
            })
        }, 2000)

    }, [url])
    
    return {todo, loading, error}
}
export default useFetch