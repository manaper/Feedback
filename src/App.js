import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList';
import {v4 as uuid} from 'uuid'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);
    
    const handleDelete = (id) => {
        if(window.confirm('Are you sure to delete')){
            setFeedback(feedback.filter(a=>a.id !== id))
        }
    }

    const addFeedback= (newFeedback) =>{
        newFeedback.id = uuid();
        setFeedback([newFeedback,...feedback])
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm handleAdd = {addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList 
                handleDelete={handleDelete}
                feedback = {feedback} />
            </div>
        </>
    )
}


export default App