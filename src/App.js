import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList';

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);
    
    const handleDelete = (id) => {
        if(window.confirm('Are you sure to delete')){
            setFeedback(feedback.filter(a=>a.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList 
                handleDelete={handleDelete}
                feedback = {feedback} />
            </div>
        </>
    )
}


export default App