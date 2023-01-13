import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback,handleDelete}) {
  if(!feedback || feedback.length === 0) {
    return <div>'Not content'</div>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) =>(
        <FeedbackItem 
        handleDelete = {handleDelete}
        key={item.id}
        item={item}  />
      ))}
    </div>
  )
}

export default FeedbackList
