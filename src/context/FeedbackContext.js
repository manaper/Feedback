import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text: 'test',
            rating : 9,
        },
        {
            id:2,
            text: 'test2',
            rating : 10,
        },
        {
            id:3,
            text: 'test3',
            rating : 10,
        },
    ])
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure to delete')) {
            setFeedback(feedback.filter(a => a.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid();
        setFeedback([newFeedback, ...feedback])
    }
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    const updateFeedback = (id,updItem) =>{
        setFeedbackEdit(feedback.map((item)=> (item.id === id ? {...item,...updItem} : item)))
    }
    return (
    <FeedbackContext.Provider
    value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext;