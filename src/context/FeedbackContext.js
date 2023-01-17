import { createContext, useEffect, useState } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    const [feedback,setFeedback] = useState([])
    const [isLoadging, setLoading] = useState(true)

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async() => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setLoading(false)
    }
    const deleteFeedback = async (id) => {
    
        if (window.confirm('Are you sure to delete')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE'}) 
            setFeedback(feedback.filter(a => a.id !== id))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(newFeedback),
        }) 
        const data = await response.JSON()
        setFeedback([data, ...feedback])
    }
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    const updateFeedback = async(id,updItem) =>{
        const response = fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(updItem),
        })
        const data = await JSON.stringify(response)
        setFeedbackEdit(feedback.map((item)=> (item.id === id ? {...item,...data} : item)))
    }
    return (
    <FeedbackContext.Provider
    value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoadging
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext;