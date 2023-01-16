import React from 'react'
import FeedbackItem from './FeedbackItem'
import {AnimatePresence, motion} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'


function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
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
