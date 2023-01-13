import React from 'react'
import FeedbackItem from './FeedbackItem'
import {AnimatePresence, motion} from 'framer-motion'

function FeedbackList({feedback,handleDelete}) {
  if(!feedback || feedback.length === 0) {
    return <div>'Not content'</div>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) =>(
        <motion.div key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
        <FeedbackItem 
        handleDelete = {handleDelete}
        key={item.id}
        item={item}  />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) =>(
  //       <FeedbackItem 
  //       handleDelete = {handleDelete}
  //       key={item.id}
  //       item={item}  />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
